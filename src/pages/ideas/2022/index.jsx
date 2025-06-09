import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { getAllIdeas } from '@/helper/getAllIdeas2022';
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
                    <Link href={`/ideas/2022/${article.slug}`} passHref>
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

export default function Ideas({ articles }) {
    return (
        <>
            <Head>
                <title>Idea List</title>
                <meta name="description" content="Idea List for GSOC 2022" />
            </Head>

            <Container className="mt-20 mb-28">
                <div className="flex justify-center items-center w-full">
                    <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
                        AOSSIE&apos;s{' '}
                        <b>Idea List</b> for{' '}
                        <b>Google Summer of Code 2022</b>
                    </p>
                </div>

                <Container.Inner>
                    <div className="mt-10 sm:mt-20 flex justify-center">
                        <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                            {articles.map((article) => (
                                <Article key={article.slug} article={article} />
                            ))}
                        </Grid>
                    </div>

                    <div className="text-center mt-16">
                        <Link
                            href="/ideas"
                            className="mx-auto group rounded-lg items-center overflow-hidden bg-zinc-800 dark:bg-white px-8 py-3 text-white focus:outline-none dark:text-black"
                        >
                            <span className="font-mono font-semibold">Go Back</span>
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