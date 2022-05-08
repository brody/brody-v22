import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

export default function List({ posts }) {
  return (
    <div
      id='list'
      className='sticky top-0 bottom-0 flex-col hidden h-screen overflow-y-auto border-r lg:flex w-80 border-neutral-800 overscroll-contain'
    >
      <div
        id='list-title'
        className='sticky top-0 w-full px-8 pt-12 pb-5 text-xl font-semibold border-b bg-neutral-900 border-neutral-800 text-neutral-50'
      >
        Journal
      </div>
      <div id='list-items' className='flex flex-col h-screen px-4 pb-4'>
        {/* <span className='px-4 pt-8 pb-4 text-lg font-semibold year text-neutral-100'>2022</span> */}

        <div className='grid grid-cols-1 p-4 md:grid-cols-3 lg:grid-cols-4 md:p-0'>
          {posts.map(({ slug, frontmatter }) => (
            <div key={slug} className='flex flex-col m-2 overflow-hidden border border-gray-200 shadow-lg rounded-xl'>
              <Link href={`/post/${slug}`}>
                <a>
                  {/* <Image width={650} height={340} alt={frontmatter.title} src={`/${frontmatter.socialImage}`} /> */}
                  {/* <h1 className='p-4'>{frontmatter.title}</h1> */}
                </a>
                <a className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
                  <div className='flex flex-col justify-center space-y-1'>
                    <div className='text-sm font-medium'>{frontmatter.title} </div>
                    <div className='text-xs uppercase text-neutral-400'>Oct 19</div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>
              What I need in a digital workspace and other musings of remote life
            </div>
            <div className='text-xs uppercase text-neutral-400'>Oct 19</div>
          </div>
        </a>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800 bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium text-neutral-50'>Figma Essentials</div>
            <div className='text-xs uppercase text-neutral-300'>Jun 13</div>
          </div>
        </a>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>Design systems as knowledge graphs</div>
            <div className='text-xs uppercase text-neutral-400'>Jan 02</div>
          </div>
        </a>

        <span className='px-4 pt-8 pb-4 text-lg font-semibold year text-neutral-100'>2021</span>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>
              What I need in a digital workspace and other musings of remote life
            </div>
            <div className='text-xs uppercase text-neutral-400'>Oct 19</div>
          </div>
        </a>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>Figma Essentials</div>
            <div className='text-xs uppercase text-neutral-400'>Jun 13</div>
          </div>
        </a>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>Design systems as solution for agencies</div>
            <div className='text-xs uppercase text-neutral-400'>Jan 02</div>
          </div>
        </a>

        <span className='px-4 pt-8 pb-4 text-lg font-semibold year text-neutral-100'>2020</span>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>Utilities for setting the maximum width of an element</div>
            <div className='text-xs uppercase text-neutral-400'>Oct 19</div>
          </div>
        </a>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>Figma Essentials</div>
            <div className='text-xs uppercase text-neutral-400'>Jun 13</div>
          </div>
        </a>
        <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-neutral-800'>
          <div className='flex flex-col justify-center space-y-1'>
            <div className='text-sm font-medium'>Design systems as solution for agencies</div>
            <div className='text-xs uppercase text-neutral-400'>Jan 02</div>
          </div>
        </a> */}
      </div>
    </div>
  );
}
