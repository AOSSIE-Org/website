import { fetchIdeaContent, fetchIdeasFromGitHub, getCurrentYear } from '@/helper/fetchGitHubIdeas';
import { IdeaLayout } from '@/components/ideas/IdeaLayout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm-4';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { notFound } from 'next/navigation';
import { getIdeas } from '@/lib/ideas';

//  Generate all static routes
export async function generateStaticParams() {
  const currentYear = getCurrentYear();
  const allParams = [];

  try {
    for (let year = 2022; year <= currentYear; year++) {
      const yearStr = year.toString();

      // GitHub ideas
      const githubIdeas = await fetchIdeasFromGitHub(yearStr);
      githubIdeas.forEach((idea) => {
        allParams.push({
          year: yearStr,
          slug: idea.slug,
        });
      });

      // Local ideas
      const localIdeas = await getIdeas(yearStr);
      localIdeas.forEach((idea) => {
        allParams.push({
          year: yearStr,
          slug: idea.slug,
        });
      });
    }
  } catch (error) {
    console.error('Error generating static params:', error);
  }

  // De-duplicate params
  const uniqueParams = Array.from(
    new Set(allParams.map((p) => JSON.stringify(p)))
  ).map((s) => JSON.parse(s));

  return uniqueParams;
}

// ✅ Metadata (lightweight)
export async function generateMetadata({ params }) {
  const { year, slug } = params;

  return {
    title: `${slug} - GSOC ${year} Idea`,
    description: `Google Summer of Code ${year} Idea`,
  };
}

// ✅ Page rendering
export default async function IdeaPage({ params }) {
  const { year, slug } = params;

  const idea = await fetchIdeaContent(slug, year);

  if (!idea) {
    notFound();
  }

  const meta = {
    title: idea.title,
  };

  return (
    <IdeaLayout meta={meta}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          a: (props) => (
            <a
              {...props}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-yellow-400 underline"
            />
          ),
        }}
      >
        {idea.content}
      </ReactMarkdown>
    </IdeaLayout>
  );
}