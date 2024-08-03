// src/pages/ideas/2022/[slug].jsx

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

const components = {}

export default function IdeaPage({ frontMatter, mdxSource }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <div>
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src', 'pages', 'ideas', '2022'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('src', 'pages', 'ideas', '2022', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontMatter, content } = matter(markdownWithMeta)

  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  }
}
