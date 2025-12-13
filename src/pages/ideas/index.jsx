import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { getAllIdeas } from '@/helper/getAllIdeas';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Article({ article }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <MuiCard
        className="dark:bg-[#2A2A2A] dark:border-white transition-colors transition-transform hover:bg-zinc-100 dark:hover:bg-zinc-700"
        sx={{
          height: 350,
          borderRadius: 2,
          border: '1px solid',
          borderColor: '#3c982c',
          boxShadow: '0px 4px 4px #00000040',
          backdropFilter: 'blur(4px) brightness(100%)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0px 8px 16px #00000040',
          },

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
          <Link href={`/ideas/2025/${article.slug}`} passHref>
            <Button
              sx={{
                color: '#3c982c',
                textTransform: 'none', // Prevent uppercase
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


export default function Ideas({ articles }) {
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


          <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-5xl md:text-5xl lg:text-6xl text-center">
            IDEAS
          </h1>

          <div
            className="hidden md:block w-[75px] h-[75px] m-2 bg-cover bg-center absolute right-10"
            style={{ backgroundImage: "url('/logo.png')" }}
            aria-label="Logo"
          ></div>

        </div>
        <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          Explore the world of open-source possibilities with AOSSIE&apos;s{' '}
          <b>Idea List</b>. As part of{' '}
          <b>Google Summer of Code 2025</b>, we offer
          a unique opportunity for developers to explore new ideas, a wide
          variety of projects for developers to choose from and contribute to.
          From developing new features to fixing critical bugs, our idea list
          is your go-to destination for finding your next big project and
          kickstart your open-source journey.
        </p>
        <Container.Inner>
          <div className="mt-10 flex justify-center sm:mt-20">
            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
              {articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))}
            </Grid>
          </div>
          <div className="mt-16 text-center">
            <Link
              className="group order-2 mx-auto items-center overflow-hidden rounded-lg bg-zinc-800 px-8 py-3 text-white focus:outline-none dark:bg-white dark:text-black"
              href="/ideas/2024"
            >
              <span className="text-center font-mono font-semibold">
                View 2024 Idea List
              </span>
            </Link>
          </div>
        </Container.Inner>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllIdeas()).map(({ component, ...meta }) => meta),
    },
  };
}
