import Head from "next/head";
import Grid from "@mui/material/Grid";
import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import Image from "next/image";
import projects from "@/helper/projects";
import { CardEffect } from "@/components/CardEffect";

const Cards = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ paddingTop: "40px", justifyContent: "center" }}
    >
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} className="flex justify-center">
          <CardEffect
            heading={project.name}
            content={project.description}
            logo={project.logo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const ProjectSection = () => {
  return (
    <div className="flex items-center justify-center mb-8 relative">

      {/* Left Logo */}
      <Image
        src="/logo.png"
        alt="AOSSIE logo"
        width={75}
        height={75}
        className="hidden md:block absolute left-10"
      />

      <h1 className="font-mono text-6xl font-extrabold tracking-tighter text-[#32a852] dark:text-yellow-400 text-center">
        PROJECTS
      </h1>

      {/* Right Logo */}
      <Image
        src="/logo.png"
        alt="AOSSIE logo"
        width={75}
        height={75}
        className="hidden md:block absolute right-10"
      />
    </div>
  );
};

const styles = {
  bannerWrapper: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    position: "relative",
    overflow: "hidden",
  },
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>PROJECTS</title>
        <meta name="description" content="Project list for GSOC" />
      </Head>

      <Container className="mt-20 mb-28">
        <Container.Inner>

          <ProjectSection />

          <p className="text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 text-center mb-8">
            Our Projects showcase our open-source work across multiple technologies.
            Explore the projects to see how we contribute to the developer community.
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