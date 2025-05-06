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
import Image from 'next/image';
import projects from '@/helper/projects'
function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Define the Cards component here
const Cards = () => {
  const router = useRouter();



  return (
    <Grid container spacing={4} sx={{ paddingTop: '40px', justifyContent: 'center' }}>
      {projects.map((project, index) => (
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
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-10px) scale(1.03)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                borderColor: '#4CAF50',
                '&:before': {
                  opacity: 1,
                },
                '& .MuiCardContent-root': {
                  background: 'rgba(255, 255, 255, 0.05)',
                },
                '& .MuiTypography-h5': {
                  color: '#4CAF50',
                },
                '& .project-logo': {
                  transform: 'rotate(360deg) scale(1.1)',
                  filter: 'drop-shadow(0 0 5px rgba(60, 152, 44, 0.5))',
                },
                '& .card-link': {
                  color: '#4CAF50',
                  transform: 'translateX(5px)',
                },
                '& .link-icon': {
                  transform: 'scale(1.2) rotate(45deg)',
                  color: '#4CAF50',
                },
              },
              '&:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(225deg, rgba(60, 152, 44, 0.05) 0%, rgba(60, 152, 44, 0) 100%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
              },
              '&:hover:after': {
                opacity: 1,
              },
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: 'linear-gradient(90deg, #3c982c, #4CAF50)',
                transform: 'translateY(-5px)',
                transition: 'transform 0.4s ease',
              },
              '&:hover:before': {
                transform: 'translateY(0)',
              }
            }}
          >
            <CardContent sx={{ 
              flexGrow: 1, 
              textAlign: 'center',
              transition: 'all 0.3s ease',
            }}>
              <Image
                src={project.logo}
                alt={`${project.title} image`}
                width={80}
                height={80}
                className="project-logo"
                style={{ 
                  margin: '0 auto 16px', 
                  objectFit: 'contain',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
              <Typography
                variant="h5"
                className="mt-6 font-mono text-green-600 dark:text-yellow-400"
                sx={{
                  fontFamily: 'Nunito-Bold',
                  color: '#3c982c',
                  textAlign: 'center',
                  transition: 'color 0.3s ease',
                }}
              >
                {project.name}
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
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <p className="relative z-10 mt-6 flex text-md font-semibold font-mono text-zinc-600 transition card-link dark:text-zinc-200" style={{ transition: 'all 0.3s ease' }}>
                <LinkIcon className="h-6 w-6 flex-none link-icon" style={{ transition: 'all 0.4s ease' }} />
                <span className="ml-2">{project.link.label}</span>
              </p>
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
        className="hidden md:block w-[75px] h-[75px] m-2 bg-cover bg-center dark:bg-[url('/logo.png')] bg-[url('/logo.png')] absolute left-10"
        alt="GSOC Logo"
      ></div>

      <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-6xl md:text-5xl lg:text-6xl text-center">
        PROJECTS
      </h1>

      <div
        className="hidden md:block w-[75px] h-[75px] m-2 bg-cover bg-center absolute right-10"
        style={{ backgroundImage: "url('/logo.png')" }}
        aria-label="Logo"
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
            featuring projects in a variety of languages and areas. Take a peek and see how we&apos;re making a difference with our technical spells.
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