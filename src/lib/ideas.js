import glob from 'fast-glob'
import path from 'path'
import fs from 'fs'

export async function getIdeas(year) {
  const ideasDir = path.join(process.cwd(), `src/app/ideas/${year}`)
  
  if (!fs.existsSync(ideasDir)) {
      return []
  }

  const files = await glob('**/page.mdx', { cwd: ideasDir })

  const ideas = await Promise.all(files.map(async (file) => {
    const slug = path.dirname(file)
    const filePath = path.join(ideasDir, file)
    
    try {
        const source = fs.readFileSync(filePath, 'utf8')
        const meta = extractMeta(source)
        
        return {
            slug,
            ...meta
        }
    } catch (e) {
        console.error(`Failed to load idea for year ${year}, slug ${slug}`, e)
        return null
    }
  }))

  return ideas.filter(idea => idea !== null && idea.title)
}

function extractMeta(source) {
  try {
    // Match export const meta = { ... or export const metadata = { ...
    const match = source.match(/export const meta(?:data)?\s*=\s*(\{[\s\S]*)/);
    
    if (!match) return {};

    // We start from the opening brace
    const str = match[1];
    let braceCount = 0;
    let end = 0;
    
    // Find the closing brace that matches the first opening brace
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{') braceCount++;
        else if (str[i] === '}') braceCount--;
        
        if (braceCount === 0) {
            end = i + 1;
            break;
        }
    }
    
    if (end > 0) {
        const objectStr = str.substring(0, end);
        // Use new Function to safely evaluate the object literal
        const getMeta = new Function(`return ${objectStr}`);
        return getMeta();
    }
  } catch (e) {
    console.error('Error parsing metadata:', e);
  }
  return {};
}
