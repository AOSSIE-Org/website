import Head from 'next/head';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@/components/Container';
import { Banner } from '@/components/Banner';
import { useRouter } from 'next/router';
import Image from 'next/image';  // Import next/image for image optimization
import Link from 'next/link';  // Import next/link for navigation

// Define the Cards component here
const Cards = () => {
  const router = useRouter();

  // Function to handle redirection
  const handleRedirect = (title) => {
    const projectLink = `/projects/${title.toLowerCase().replace(/\s+/g, '-')}`;
    router.push(projectLink);
  };

  return (
    <Grid container spacing={4} sx={{ paddingTop: '40px', justifyContent: 'center' }}>
      {[
        {
          title: 'Agora Blockchain',
          description: 'There isn’t just one voting algorithm, there’s hundreds. Therefore, we developed Agora to allow for democratic elections using any algorithm. This application uses Agora Web API as a backend application.',
          image: '/Agora.png',
          link: 'https://github.com/AOSSIE-Org/Agora-Blockchain',
        },
        {
          title: 'Agora Vote Android',
          description: 'This application uses Agora Web API as a backend application. It allows for elections to be held by using multiple algorithms such as Oklahoma, RangeVoting, RankedPairs, Satisfaction Approval Voting.',
          image: '/Agora.png',
          link: 'https://gitlab.com/aossie/agora-android',
        },
        {
          title: 'Djed',
          description: 'Djed is a Formally Verified Crypto-Backed Algorithmic Stablecoin Protocol.',
          image: '/Djed.png',
          link: 'https://github.com/AOSSIE-Org/Djed-Solidity-WebDashboard',
        },
        {
          title: 'Pictopy',
          description: 'PictoPy is a modern desktop app designed to transform the handling of digital photos. It facilitates efficient gallery management with a robust focus on privacy, offering smart tagging capabilities for photos based on objects, faces, or scenes.',
          image: '/Pictopy.png',
          link: 'https://github.com/AOSSIE-Org/PictoPy',
        },
        {
          title: 'EduAid',
          description: 'An online tool that can generate short quizzes on input educational content can be of great use to teachers and students alike as it can help retain important information, frame questions and quickly revise large chunks of content.',
          image: '/default.png',
          link: 'https://github.com/AOSSIE-Org/EduAid',
        },
        {
          title: 'OpenChat',
          description: 'OpenChat a decentralised platform for secure and private messaging and file sharing built on top of blockchain.',
          image: '/default.png',
          link: '',
        },
        {
          title: 'Resonate',
          description: 'With the rising popularity of social voice platforms such as Clubhouse, it is high time for an Open Source alternative. A platform like this would not only enhance credibility within the open-source community but also attract more users and foster growth.',
          image: '/Resonate.png',
          link: 'https://github.com/AOSSIE-Org/Resonate',
        },
        {
          title: 'Social Street Smart',
          description: 'With the advent of the Internet, the problems faced by people have also grown. These include abusive languages.',
          image: '/SSS.png',
          link: 'https://github.com/AOSSIE-Org/Social-Street-Smart',
        },
      ].map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MuiCard
            className='dark:bg-[#2A2A2A] dark:border-white'
            sx={{
              height: 400,
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
              <Image
                src={project.image}
                alt={`${project.title} image`}
                width={80}
                height={80}
                style={{ margin: '0 auto 16px', objectFit: 'contain' }}
              />
              <Typography
                variant="h2"
                className="mt-6 text-2xl font-semibold font-mono text-green-600 dark:text-yellow-400"
                sx={{
                  fontFamily: 'Nunito-Bold',
                  color: '#3c982c',
                  textAlign: 'center',
                }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body1"
                className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 text-center"
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
                {project.description.length > 100
                  ? `${project.description.slice(0, 100)}...`
                  : project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Link href={project.link} passHref>
                <Button size="large" sx={{ color: '#3c982c' }} className="font-Nunito-Bold text-green-600 dark:text-yellow-400 text-lg font-mono leading-7 text-center">

                  Know More <ArrowForwardIcon sx={{ width: 20, height: 20 }} />
                </Button>
              </Link>
            </CardActions>
          </MuiCard>
        </Grid>
      ))
      }
    </Grid >
  );
};

const ProjectSection = () => {
  return (
    <div className="ideas-text flex items-center justify-center mb-8 relative">
      <div
        className="w-[75px] h-[75px] m-2 bg-cover bg-center dark:bg-[url('/logo.png')] bg-[url('/logo.png')] absolute left-10"
        alt="GSOC Logo"
      ></div>

      <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-6xl md:text-5xl lg:text-6xl text-center">
        PROJECTS
      </h1>

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

export default function Projects() {
  return (
    <>
      <Head>
        <title>PROJECTS</title>
        <meta name="description" content="PROJECT List for GSOC" />
      </Head>
      <Container className="mt-20 mb-28">
        <Container.Inner>
          <ProjectSection />
          <p className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 text-center mb-8">
            Our Projects, where we showcase our tech wizardry and code-slinging skills! Our portfolio is a treasure trove of open-source gems,
            featuring projects in a variety of languages and areas. Take a peek and see how we're making a difference with our technical spells.
          </p>
          <Cards />
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
