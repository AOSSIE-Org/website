import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container } from '@/components/Container';
import { fetchIdeasFromGitHub, getCurrentYear } from '@/helper/fetchGitHubIdeas';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Skeleton, SkeletonText } from '@/components/Skeletons';

function Article({ article, currentYear }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MuiCard
        className="dark:bg-[#2A2A2A] dark:border-white"
        sx={{
          height: 350,
          borderRadius: 2,
          border: '1px solid',
          borderColor: '#3c982c',
          boxShadow: '0px 4px 4px #00000040',
          backdropFilter: 'blur(4px) brightness(100%)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'background-color 0.3s ease',

        }}
      >
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography
            variant="h5"
            className="mt-6 text-2xl font-mono text-green-600 dark:text-yellow-400"
            sx={{ fontFamily: 'Nunito-Bold', color: '#3c982c', textAlign: 'center' }}
          >
            {article.title}
          </Typography>

          <Typography
            variant="body1"
            className="text-zinc-600 text-base dark:text-zinc-400 text-lg font-mono leading-6 text-center"
            sx={{
              fontFamily: 'Nunito-Light',
              color: 'black',
              mt: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
            }}
          >
            {article.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center' }}>
          <Link href={`/ideas/${currentYear}/${article.slug}`} passHref>
            <Button
              sx={{
                color: '#3c982c',
                textTransform: 'none',
              }}
              className="font-Nunito-Bold text-green-600 dark:text-yellow-400 text-lg leading-7 text-center"
            >
              Know more <ArrowForwardIcon sx={{ width: 20, height: 20 }} />
            </Button>
          </Link>
        </CardActions>
      </MuiCard>
    </Grid>
  );
}

function ArticleSkeleton() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MuiCard
        className="dark:bg-[#2A2A2A] dark:border-white"
        sx={{
          height: 350,
          borderRadius: 2,
          border: '1px solid',
          borderColor: '#3c982c',
          boxShadow: '0px 4px 4px #00000040',
          backdropFilter: 'blur(4px) brightness(100%)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Skeleton height="2rem" width="70%" className="mx-auto mb-4" />
          <SkeletonText lines={4} />
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Skeleton height="2rem" width="6rem" />
        </CardActions>
      </MuiCard>
    </Grid>
  );
}

function IdeasGridSkeleton() {
  return (
    <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <ArticleSkeleton key={index} />
      ))}
    </Grid>
  );
}

export default function Ideas() {
  const [articles, setArticles] = useState([]);
  const [currentYear, setCurrentYear] = useState(getCurrentYear());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const ideas = await fetchIdeasFromGitHub(currentYear);
        setArticles(ideas);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentYear]);

  return (
    <>
      <Head>
        <title>Idea List</title>
        <meta name="description" content="Idea List for GSOC" />
      </Head>
      <Container className="mt-20 mb-28">
        <div className="ideas-text flex items-center justify-center mb-8 relative">
          <div
            className="hidden md:block w-[75px] h-[75px] m-2 bg-cover bg-center dark:bg-[url('/logo.png')] bg-[url('/logo.png')] absolute left-10"
            alt="GSOC Logo"
          ></div>

          {isLoading ? (
            <Skeleton height="3.75rem" width="8rem" />
          ) : (
            <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-5xl md:text-5xl lg:text-6xl text-center">
              IDEAS
            </h1>
          )}

          <div
            className="hidden md:block w-[75px] h-[75px] m-2 bg-cover bg-center absolute right-10"
            style={{ backgroundImage: "url('/logo.png')" }}
            aria-label="Logo"
          ></div>

        </div>
        {isLoading ? (
          <SkeletonText lines={3} className="text-center" />
        ) : (
          <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Explore the world of open-source possibilities with AOSSIE&apos;s{' '}
            <b>Idea List</b>. As part of{' '}
            <b>Google Summer of Code {currentYear}</b>, we offer
            a unique opportunity for developers to explore new ideas, a wide
            variety of projects for developers to choose from and contribute to.
            From developing new features to fixing critical bugs, our idea list
            is your go-to destination for finding your next big project and
            kickstart your open-source journey.
          </p>
        )}
        <Container.Inner>
          <div className="mt-10 flex justify-center sm:mt-20">
            {isLoading ? (
              <IdeasGridSkeleton />
            ) : (
              <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                {articles.map((article) => (
                  <Article key={article.slug} article={article} currentYear={currentYear} />
                ))}
              </Grid>
            )}
          </div>
        </Container.Inner>
      </Container>
    </>
  );
}
