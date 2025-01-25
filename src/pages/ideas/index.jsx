import Head from 'next/head';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@/components/Container';
import { getAllIdeas } from '@/helper/getAllIdeas';
import { Banner } from '@/components/Banner';

// Define the Cards component here
const Cards = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ paddingTop: '40px', justifyContent: 'center' }}
    >
      {[ 
        {
          title: 'PictoPy',
          description: 'PictoPy is a privacy-focused desktop app designed to transform the handling of digital photos.',
        },
        {
          title: 'Agora Vote Android',
          description: 'This application uses the Agora Web API as a backend. It allows for elections.',
        },
        {
          title: 'Monumento-iPad',
          description: 'Monumento is a social media app for sharing landmarks and visualizing their 3D models from a mobile device.',
        },
        {
          title: 'Resonate App',
          description: 'An open-source social voice platform.',
        },
        {
          title: 'Agora Vote API V2',
          description: 'Agora API is a vote counting API written using Scala 2 and Play Framework.',
        },
        {
          title: 'Monumento',
          description: 'Monumento is a social media app for sharing landmarks and visualizing their 3D models from a mobile device.',
        },
      ].map((ideas, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MuiCard
            sx={{
              height: '100%',
              borderRadius: 2,
              border: '1px solid',
              borderColor: {
                xs: '#3c982c', // Light mode green
                dark: 'white', // Dark mode white
              },
              boxShadow: '0px 4px 4px #00000040',
              backdropFilter: 'blur(4px) brightness(100%)',
              background: {
                xs: 'linear-gradient(180deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%)', // Light mode white
                dark: 'linear-gradient(180deg, rgb(85, 84, 84) 0%, rgb(73, 73, 73) 100%)', // Dark mode black
              },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h2"
                className="mt-6 text-2xl font-semibold font-mono text-green-600 dark:text-yellow-400"
                sx={{
                  fontFamily: 'Nunito-Bold',
                  color: '#3c982c',
                  textAlign: 'center',
                }}
              >
                {ideas.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: 'Nunito-Light', color: 'black', mt: 2 }}
                className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 text-center"
              >
                {ideas.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                size="large"
                sx={{ color: '#3c982c' }}
                className="font-Nunito-Bold text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 text-center"
              >
                Know More! <ArrowForwardIcon sx={{ width: 20, height: 20 }} />
              </Button>
            </CardActions>
          </MuiCard>
        </Grid>
      ))}
    </Grid>
  );
};

const IdeasSection = () => {
  return (
    <div className="ideas-text flex items-center justify-center mb-8 relative">
      {/* GSOC logo: Absolute positioning to shift it to the left */}
      <div
        className="w-[75px] h-[75px] m-2 bg-cover bg-center dark:bg-[url('/gsoc-logo-ideas.png')] bg-[url('/gsoc-logo-ideas.png')] absolute left-10"
        alt="GSOC Logo"
      ></div>
      
      <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-6xl md:text-5xl lg:text-6xl text-center">
        IDEAS
      </h1>
      
      {/* Second logo: Absolute positioning to shift it to the right */}
      <div
        className="w-[75px] h-[75px] m-2 bg-cover bg-center dark:bg-[url('/logo.png')] bg-[url('/logo.png')] absolute right-10"
        alt="Logo"
      ></div>
    </div>
  );
};

const styles = {
  bannerWrapper: {
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    position: 'relative',
    overflow: 'hidden',
  },
};

export default function Ideas({ articles }) {
  return (
    <>
      <Head>
        <title>Idea List</title>
        <meta name="description" content="Idea List for GSOC" />
      </Head>
      <Container className="mt-20 mb-28">
        <Container.Inner>
          <div className="ideas-text flex items-center justify-center mb-8">
            <div
              className="w-[75px] h-[75px] m-2 bg-cover bg-center dark:bg-[url('/google-logo.png')] bg-[url('/google-logo.png')]"
              alt="Google Logo"
            ></div>
          </div>
          <IdeasSection />
          <p className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 text-center">
            Explore the world of open-source possibilities with AOSSIE's Idea List.
            As part of Google Summer of Code, we offer a unique opportunity for
            developers to explore new ideas, a wide variety of projects for
            developers to choose from and contribute to. From developing new
            features to fixing critical bugs, our idea list is your go-to
            destination for finding your next big project and kickstart your
            open-source journey.
          </p>
          <Cards />
          <div className="mt-16 text-center">
            <Link
              className="group order-2 mx-auto items-center overflow-hidden rounded-lg bg-zinc-800 px-8 py-3 text-white focus:outline-none dark:bg-white dark:text-black"
              href="/ideas/2023"
            >
              <span className="text-center font-mono font-semibold">
                View 2023 Idea List
              </span>
            </Link>
          </div>
        </Container.Inner>
      </Container>

      <div style={styles.bannerWrapper}>
        <Container.Outer className="mt-28">
          <Banner />
        </Container.Outer>
      </div>
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
