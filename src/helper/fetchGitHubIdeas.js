/**
 * Fetch idea files from AOSSIE-Org/Info repository
 * GitHub API: https://api.github.com/repos/AOSSIE-Org/Info/contents/GSoC-Ideas/{year}
 */

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'AOSSIE-Org';
const REPO_NAME = 'Info';
const IDEAS_PATH = 'GSoC-Ideas';

/**
 * Get the current year
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Convert filename to title by adding spaces before capital letters
 * Example: "AgoraBlockchain.md" -> "Agora Blockchain"
 */
export function formatTitle(filename) {
  // Remove .md extension
  const nameWithoutExt = filename.replace(/\.md$/, '');

  // Add space before capital letters, but not at the start
  const spaced = nameWithoutExt.replace(/([A-Z])/g, ' $1').trim();

  return spaced;
}

/**
 * Strip markdown formatting from text
 */
function stripMarkdown(text) {
  return text
    // Remove links: [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove bold: **text** or __text__ -> text
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    // Remove italic: *text* or _text_ -> text
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove inline code: `code` -> code
    .replace(/`([^`]+)`/g, '$1')
    // Remove strikethrough: ~~text~~ -> text
    .replace(/~~(.*?)~~/g, '$1')
    // Remove headers: # text -> text
    .replace(/^#+\s+/gm, '')
    // Remove image syntax: ![alt](url) -> alt
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    // Clean up extra spaces
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract description from markdown content
 * Looks for text under headings containing "Background" or "Motivation"
 */
export function extractDescription(markdownContent) {
  const lines = markdownContent.split('\n');
  let isInTargetSection = false;
  let description = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this is a heading with Background or Motivation
    if (line.match(/^#+\s*.*(Background|Motivation)/i)) {
      isInTargetSection = true;
      continue;
    }

    // Stop if we hit another heading
    if (isInTargetSection && line.match(/^#+\s/)) {
      break;
    }

    // Collect text from the target section
    if (isInTargetSection && line.trim()) {
      description += line.trim() + ' ';

      // Limit description length to approximately 150-200 characters
      if (description.length > 150) {
        break;
      }
    }
  }

  // If no Background/Motivation section found, use first paragraph
  if (!description.trim()) {
    for (const line of lines) {
      // Skip headings and empty lines
      if (!line.match(/^#+\s/) && line.trim()) {
        description += line.trim() + ' ';
        if (description.length > 150) {
          break;
        }
      }
    }
  }

  // Strip markdown formatting from description
  description = stripMarkdown(description);

  // Truncate and add ellipsis if needed
  if (description.length > 200) {
    description = description.substring(0, 197) + '...';
  }

  return description.trim();
}

/**
 * Fetch all idea files from GitHub for a specific year
 */
export async function fetchIdeasFromGitHub(year = getCurrentYear()) {
  try {
    const contentsUrl = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${IDEAS_PATH}/${year}`;

    const response = await fetch(contentsUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const files = await response.json();

    // Filter for .md files only, excluding index.md and Template.md
    const mdFiles = files.filter(file =>
      file.type === 'file' &&
      file.name.endsWith('.md') &&
      file.name !== 'index.md' &&
      file.name !== 'Template.md'
    );

    // Fetch content for each file and build idea objects
    const ideasPromises = mdFiles.map(async (file) => {
      const contentResponse = await fetch(file.download_url);
      const content = await contentResponse.text();

      return {
        slug: file.name.replace(/\.md$/, ''),
        title: formatTitle(file.name),
        description: extractDescription(content),
        downloadUrl: file.download_url,
        year: year,
      };
    });

    const ideas = await Promise.all(ideasPromises);

    return ideas;
  } catch (error) {
    console.error('Error fetching ideas from GitHub:', error);
    return [];
  }
}

/**
 * Fetch a single idea file content from GitHub
 */
export async function fetchIdeaContent(slug, year = getCurrentYear()) {
  try {
    const fileUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${IDEAS_PATH}/${year}/${slug}.md`;

    console.log(`Fetching idea content from: ${fileUrl}`);

    const response = await fetch(fileUrl);

    if (!response.ok) {
      console.error(`Failed to fetch idea content: ${response.status} ${response.statusText}`);
      return null;
    }

    const content = await response.text();

    if (!content || content.trim().length === 0) {
      console.error(`Empty content received for ${slug}`);
      return null;
    }

    console.log(`Successfully fetched ${slug}, content length: ${content.length}`);

    return {
      slug,
      title: formatTitle(slug + '.md'),
      content,
      year,
    };
  } catch (error) {
    console.error('Error fetching idea content:', error);
    return null;
  }
}
