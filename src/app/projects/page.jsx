'use client'

import Link from 'next/link';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@/components/shared/Container';
import { Banner } from '@/components/shared/Banner';
import Image from 'next/image';
import projects from '@/helper/projects'
import { CardProduct } from '@/components/products/CardProduct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'


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

// Cards grid
const Cards = ({ projectList }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 4 }} sx={{ paddingTop: '40px', justifyContent: 'center' }}>
      {projectList.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} component={motion.div} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <MuiCard
            className='dark:bg-[#2A2A2A] dark:border-white transition-transform hover:scale-[1.02] duration-300'
            sx={{
              height: 400,
              borderRadius: 2,
              border: '1px solid',
              borderColor: '#3c982c',
              boxShadow: '0px 4px 4px #00000040',
              backdropFilter: 'blur(4px) brightness(100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',

            }}
          >
            <CardContent sx={{ textAlign: 'center', pt: 4 }}>
              {project.logo && (
                <div className="flex justify-center mb-4">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              )}
              <Typography
                variant="h6"
                className="font-mono font-bold text-zinc-800 dark:text-zinc-100 mb-2"
                sx={{ 
                  fontFamily: 'Nunito', 
                  mb: 1 
                }}
              >
                {project.name}
              </Typography>

              <Typography
                variant="body1"
                className="text-zinc-600  dark:text-zinc-400 text-lg font-mono leading-7 text-center"
                sx={{ fontFamily: 'Nunito-Light',
                   color: 'black',
                    fontSize: '0.85rem' 
                  }}
              >
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', flexDirection: 'column', pb: 3 }}>
              <Link href={project.link.href} className="relative z-10 mt-2 flex items-center text-md font-semibold font-mono text-zinc-600 transition hover:text-[#00843D] dark:hover:text-yellow-400 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none scale-110" />
                <span className="ml-2">{project.link.label}</span>
              </Link>
              <div className="flex gap-6 mt-4">
                 <Link href={project.link.href} aria-label="GitHub" className="text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition">
                    <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                 </Link>
                 <Link href="https://discord.gg/hjUhu33uAn" aria-label="Discord" className="text-zinc-500 hover:text-[#5865F2] dark:text-zinc-400 dark:hover:text-[#5865F2] transition">
                     <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
                 </Link>
                 </div>
            </CardActions>
          </MuiCard>
        </Grid>
      ))
      }
    </Grid >
  );
};

//Page header

const ProjectSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="ideas-text flex items-center justify-center mb-8 relative"
    >

      <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 sm:text-6xl md:text-5xl lg:text-6xl text-center">
        PROJECTS
      </h1>

    </motion.div>
  );
};


// Main page component

export default function Projects() {
  return (
    <>
      <Container className="mt-20 mb-28">
        <Container.Inner>
            <ProjectSection />
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              >
              <div className="mb-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                 {projects.map((product) => (
                  <CardProduct key={product.slug || product.name} product={product} />
                ))}
              </div>
            </motion.div>

          {/* 
          <div className="mb-20">
             <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl mb-8 text-center"
            >
              Ready to Download
            </motion.h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 mb-16">
            {readyToDownload.map((product) => (
              <CardProduct key={product.slug} product={product} />
            ))}
            </div>
          </div>
          */}

        </Container.Inner>
      </Container>
    </>
  );
}
