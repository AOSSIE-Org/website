import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm-4';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Container } from '@/components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchIdeaContent, fetchIdeasFromGitHub, getCurrentYear } from '@/helper/fetchGitHubIdeas';

export default function IdeaPage({ idea }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Container className="mt-16 mb-20">
        <div className="text-center">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">Loading...</p>
        </div>
      </Container>
    );
  }

  if (!idea || !idea.content) {
    return (
      <Container className="mt-16 mb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100">
            Idea Not Found
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            The idea you&apos;re looking for doesn&apos;t exist or couldn&apos;t be loaded.
          </p>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Head>
        <title>{idea.title}</title>
        <meta name="description" content={`${idea.title} - GSoC ${idea.year}`} />
      </Head>
      <Container className="mt-16 mb-20">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to ideas"
              className="group mt-10 mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:hover:border-2 hover:border-2 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:left-10 lg:mb-0 xl:-top-1.5 xl:left-0"
            >
              <FontAwesomeIcon
                className="h-4 w-4 text-zinc-500 transition group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400"
                icon={faArrowLeft}
              />
            </button>
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-mono font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {idea.title}
                </h1>
              </header>
              <div className="mt-8 prose prose-zinc dark:prose-invert max-w-none font-mono">
                {idea.content && typeof idea.content === 'string' ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                    components={{
                      // Custom styling for headings
                      h1: ({ node, ...props }) => (
                        <h1
                          className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mt-10 mb-4"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2
                          className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mt-8 mb-4"
                          {...props}
                        />
                      ),
                      h3: ({ node, ...props }) => (
                        <h3
                          className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mt-6 mb-3"
                          {...props}
                        />
                      ),
                      h4: ({ node, ...props }) => (
                        <h4
                          className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mt-5 mb-2"
                          {...props}
                        />
                      ),
                      // Custom styling for paragraphs
                      p: ({ node, ...props }) => (
                        <p
                          className="text-base leading-7 text-zinc-600 dark:text-zinc-400 mb-5"
                          {...props}
                        />
                      ),
                      // Custom styling for lists
                      ul: ({ node, ...props }) => (
                        <ul
                          className="list-disc list-outside ml-6 text-zinc-600 dark:text-zinc-400 mb-4 space-y-2"
                          {...props}
                        />
                      ),
                      ol: ({ node, ...props }) => (
                        <ol
                          className="list-decimal list-outside ml-6 text-zinc-600 dark:text-zinc-400 mb-4 space-y-2"
                          {...props}
                        />
                      ),
                      li: ({ node, ...props }) => (
                        <li
                          className="text-zinc-600 dark:text-zinc-400 leading-7 pl-2"
                          {...props}
                        />
                      ),
                      // Custom styling for links
                      a: ({ node, ...props }) => (
                        <a
                          className="text-green-600 dark:text-yellow-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        />
                      ),
                      // Custom styling for code blocks
                      code: ({ node, inline, ...props }) =>
                        inline ? (
                          <code
                            className="bg-zinc-100 dark:bg-zinc-800 text-green-600 dark:text-yellow-400 px-2 py-1 rounded text-sm font-mono"
                            {...props}
                          />
                        ) : (
                          <code
                            className="block bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 p-4 rounded-lg overflow-x-auto text-sm font-mono my-4"
                            {...props}
                          />
                        ),
                      // Custom styling for blockquotes
                      blockquote: ({ node, ...props }) => (
                        <blockquote
                          className="border-l-4 border-green-600 dark:border-yellow-400 pl-6 py-2 italic text-zinc-600 dark:text-zinc-400 my-6 bg-zinc-50 dark:bg-zinc-900/30"
                          {...props}
                        />
                      ),
                      // Custom styling for tables
                      table: ({ node, ...props }) => (
                        <div className="overflow-x-auto my-4">
                          <table
                            className="min-w-full border border-zinc-300 dark:border-zinc-700"
                            {...props}
                          />
                        </div>
                      ),
                      thead: ({ node, ...props }) => (
                        <thead
                          className="bg-zinc-100 dark:bg-zinc-800"
                          {...props}
                        />
                      ),
                      th: ({ node, ...props }) => (
                        <th
                          className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left text-zinc-800 dark:text-zinc-100"
                          {...props}
                        />
                      ),
                      td: ({ node, ...props }) => (
                        <td
                          className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-zinc-600 dark:text-zinc-400"
                          {...props}
                        />
                      ),
                      // Custom styling for horizontal rules
                      hr: ({ node, ...props }) => (
                        <hr
                          className="my-6 border-zinc-300 dark:border-zinc-700"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {idea.content}
                  </ReactMarkdown>
                ) : (
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Unable to load content for this idea.
                  </p>
                )}
              </div>
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  // For static export, we need to generate all paths at build time
  const currentYear = getCurrentYear();
  const ideas = await fetchIdeasFromGitHub(currentYear);

  const paths = ideas.map((idea) => ({
    params: {
      year: currentYear.toString(),
      slug: idea.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { year, slug } = params;

  try {
    const idea = await fetchIdeaContent(slug, year);

    if (!idea) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        idea,
      },
    };
  } catch (error) {
    console.error('Error fetching idea:', error);
    return {
      notFound: true,
    };
  }
}
