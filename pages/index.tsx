import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');

    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');

    const { data: frontmatter } = matter(readFile);

    return {
      slug,

      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-1 p-4 md:grid-cols-3 lg:grid-cols-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug} className='flex flex-col m-2 overflow-hidden border border-gray-200 shadow-lg rounded-xl'>
          <Link href={`/post/${slug}`}>
            <a>
              <Image width={650} height={340} alt={frontmatter.title} src={`/${frontmatter.socialImage}`} />
              <h1 className='p-4'>{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
