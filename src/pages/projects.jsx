import Head from 'next/head';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Container } from '@/components/Container';
import { Banner } from '@/components/Banner';
import { useRouter } from 'next/router';
import Image from 'next/image';
import projects from '@/helper/projects';
import { useState } from 'react';

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Enhanced Cards component with beautiful animations
const Cards = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Grid container spacing={4} sx={{ paddingTop: '40px', justifyContent: 'center' }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MuiCard
            className='dark:bg-[#2A2A2A] dark:border-white group perspective-card'
            sx={{
              height: 400,
              borderRadius: 2,
              border: '1px solid',
              borderColor: hoveredIndex === index ? '#4CAF50' : '#3c982c',
              boxShadow: hoveredIndex === index 
                ? '0 15px 30px rgba(60, 152, 44, 0.25), 0 8px 12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(76, 175, 80, 0.15)' 
                : '0px 4px 4px #00000040',
              backdropFilter: 'blur(4px) brightness(100%)',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: hoveredIndex === index 
                ? 'translateY(-12px) scale(1.03) rotate3d(1, 5, 0, 2deg)' 
                : 'translateY(0) scale(1) rotate3d(0, 0, 0, 0deg)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: hoveredIndex === index ? '4px' : '0px',
                background: 'linear-gradient(90deg, #3c982c, #4CAF50, #8BC34A, #4CAF50, #3c982c)',
                backgroundSize: '400% 100%',
                transition: 'all 0.4s ease-out',
                animation: hoveredIndex === index ? 'gradientShift 3s ease infinite' : 'none',
              },
              '&::after': hoveredIndex === index ? {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center bottom, rgba(76, 175, 80, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
                opacity: 0.7,
                pointerEvents: 'none',
              } : {},
              '@keyframes gradientShift': {
                '0%, 100%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
              },
              '@keyframes floatUp': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-8px)' },
              },
              '@keyframes fadeIn': {
                '0%': { opacity: 0, transform: 'translateY(10px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent 
              sx={{ 
                flexGrow: 1, 
                textAlign: 'center',
                transition: 'all 0.4s ease',
                padding: hoveredIndex === index ? '20px 16px 10px' : '16px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  marginBottom: '16px',
                  transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  transform: hoveredIndex === index ? 'scale(1.12) translateY(-5px)' : 'scale(1)',
                  animation: hoveredIndex === index ? 'floatUp 3s ease-in-out infinite' : 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(60, 152, 44, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
                    transform: 'translate(-50%, -50%) scale(1.2)',
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                />
                <Image
                  src={project.logo}
                  alt={`${project.title} image`}
                  width={80}
                  height={80}
                  style={{ 
                    margin: '0 auto', 
                    objectFit: 'contain',
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    filter: hoveredIndex === index ? 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.2))' : 'none',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </div>
              <Typography
                variant="h5"
                className="mt-6 font-mono text-green-600 dark:text-yellow-400"
                sx={{
                  fontFamily: 'Nunito-Bold',
                  color: hoveredIndex === index ? '#4CAF50' : '#3c982c',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  textShadow: hoveredIndex === index ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                  animation: hoveredIndex === index ? 'fadeIn 0.4s ease' : 'none',
                }}
              >
                {project.name}
              </Typography>

              <Typography
                variant="body1"
                className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 text-center"
                sx={{
                  fontFamily: 'Nunito-Light',
                  color: hoveredIndex === index ? 'rgba(0,0,0,0.75)' : 'black',
                  mt: 2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  transition: 'all 0.4s ease',
                  opacity: hoveredIndex === index ? 0.9 : 0.8,
                }}
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions 
              sx={{ 
                justifyContent: 'center',
                transition: 'all 0.4s ease',
                padding: hoveredIndex === index ? '16px' : '8px',
                position: 'relative',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  background: hoveredIndex === index ? 'rgba(60, 152, 44, 0.08)' : 'transparent',
                }}
              >
                <p className={`
                  relative z-10 flex text-md font-semibold font-mono 
                  transition-all duration-500 ease-out
                  ${hoveredIndex === index ? 'text-[#00843D] dark:text-yellow-400' : 'text-zinc-600 dark:text-zinc-200'}
                `}>
                  <LinkIcon className={`
                    h-6 w-6 flex-none 
                    transition-all duration-500
                    ${hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-110'}
                  `} />
                  <span className={`
                    ml-2 transition-all duration-500
                    ${hoveredIndex === index ? 'font-bold tracking-wide' : ''}
                  `}>
                    {project.link.label}
                  </span>
                </p>
              </div>
            </CardActions>
            
            {/* Animated corner accent */}
            {hoveredIndex === index && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '40px',
                  height: '40px',
                  overflow: 'hidden',
                  animation: 'fadeIn 0.5s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '40px',
                    height: '40px',
                    bottom: '-20px',
                    right: '-20px',
                    background: 'linear-gradient(135deg, transparent 50%, rgba(60, 152, 44, 0.3) 50%)',
                    transform: 'rotate(0deg)',
                    animation: 'rotateCorner 3s ease-in-out infinite',
                  }}
                />
              </div>
            )}
            
            {/* Add style for perspective effect */}
            <style jsx global>{`
              .perspective-card {
                perspective: 1000px;
              }
              @keyframes rotateCorner {
                0%, 100% { transform: rotate(0deg); }
                50% { transform: rotate(15deg); }
              }
            `}</style>
          </MuiCard>
        </Grid>
      ))}
    </Grid>
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