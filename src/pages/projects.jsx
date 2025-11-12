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
            }}
          >
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Image
                src={project.logo}
                alt={`${project.title} image`}
                width={80}
                height={80}
                style={{ margin: '0 auto 16px', objectFit: 'contain' }}
              />
              <Typography
                variant="h5"
                className="mt-6 font-mono text-green-600 dark:text-yellow-400"
                sx={{
                  fontFamily: 'Nunito-Bold',
                  color: '#3c982c',
                  textAlign: 'center',
                }}
              >
                {project.name}
              </Typography>

              <Typography
                variant="body1"
                className="text-zinc-600  dark:text-zinc-400 text-lg font-mono leading-7 text-center"
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
              <p className="relative z-10 mt-6 flex text-md font-semibold font-mono text-zinc-600 transition group-hover:text-[#00843D] dark:group-hover:text-yellow-400 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none scale-110" />
               <span className="ml-2 flex items-center"> <span>{project.link.label}</span> <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-500 hover:text-gray-700" aria-label={Open ${project.link.label} on GitHub} title={Open ${project.link.label} on GitHub} > <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M12 .5C5.73.5.75 5.48.75 11.74c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.03-3.08.67-3.73-1.49-3.73-1.49-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.19.91.1-.71.38-1.19.69-1.46-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.12-2.98-.11-.28-.49-1.4.11-2.92 0 0 .91-.29 2.98 1.14a10.3 10.3 0 012.71-.37c.92.01 1.85.12 2.71.37 2.07-1.43 2.98-1.14 2.98-1.14.6 1.52.22 2.64.11 2.92.7.78 1.12 1.77 1.12 2.98 0 4.25-2.6 5.19-5.08 5.46.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.64.76.53A11.26 11.26 0 0023.25 11.74C23.25 5.48 18.27.5 12 .5z" /> </svg> </a> </span>
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
