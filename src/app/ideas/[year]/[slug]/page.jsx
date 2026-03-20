import { fetchIdeaContent, fetchIdeasFromGitHub, getCurrentYear } from '@/helper/fetchGitHubIdeas';
import { IdeaLayout } from '@/components/ideas/IdeaLayout';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm-4';
import rehypeRaw from 'rehype-raw';
import { Container } from '@/components/shared/Container';

export async function generateStaticParams() {
  const currentYear = getCurrentYear();
  const allParams = [];

  //  Only check last 2 years (to limit api calls)
  const yearsToCheck = [currentYear, currentYear - 1];

  for (const year of yearsToCheck) {
    const githubIdeas = await fetchIdeasFromGitHub(year.toString());

    githubIdeas.forEach((idea) => {
      allParams.push({
        year: year.toString(),
        slug: idea.slug,
      });
    });
  }

  return allParams;
}

export async function generateMetadata({ params }) {
  const { year, slug } = params;
  const idea = await fetchIdeaContent(slug, year);
  
  if (!idea) {
    return {
      title: 'Idea Not Found',
    };
  }
  
  return {
    title: `${idea.title} - GSOC ${year} Idea`,
    description: `Google Summer of Code ${year} Idea: ${idea.title}`,
  };
}

export default async function IdeaPage({ params }) {
  const { year, slug } = params;
  const idea = await fetchIdeaContent(slug, year);

  if (!idea) {
    return (
      <Container className="mt-32">
        <h1 className="text-center text-4xl font-bold font-mono">Idea not found</h1>
        <p className="text-center mt-4 font-mono">We couldn&apos;t find the GSOC idea you&apos;re looking for.</p>
      </Container>
    );
  }

  const meta = {
    title: idea.title,
  };

  return (
    <IdeaLayout meta={meta}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        components={{
            a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-yellow-400 underline" />
        }}
      >
        {idea.content}
      </ReactMarkdown>
    </IdeaLayout>
  );
}
