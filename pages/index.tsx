/* eslint-disable @next/next/no-sync-scripts */
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/button';
import { IconBrandTwitter, IconBrandInstagram, IconAt } from '@tabler/icons';
import NowPlaying from '../components/NowPlaying';
import RecentlyPlayed from '../components/RecentlyPlayed';
import Reading from '../components/Reading';

// export async function getStaticProps() {
//   const files = fs.readdirSync('posts');
//   const posts = files.map((fileName) => {
//     const slug = fileName.replace('.md', '');

//     const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');

//     const { data: frontmatter } = matter(readFile);

//     return {
//       slug,

//       frontmatter,
//     };
//   });
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default function Home() {
  return (
    <>
      <section className='mb-20 intro'>
        <h1 className='mb-3'>
          G&apos;day, I’m Brody MacLean, a multi-disciplinary designer working remotely from Sydney, Australia.
        </h1>
        <p className='mb-8 text-lg text-neutral-400'>
          <span className='mr-2'>Currently, I am Design System Lead at</span>
          <a href='https://www.prospa.com/' className='border-none' target='_blank' rel='noreferrer'>
            <svg
              className='inline-block fill-current text-emerald-500 hover:text-emerald-400'
              width='76'
              height='16'
              viewBox='0 0 76 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3.34654 5.89881C3.34654 7.4976 4.71227 8.7933 6.39741 8.7933C8.08254 8.7933 9.44827 7.4976 9.44827 5.89881C9.44827 4.30001 8.08254 3.00432 6.39741 3.00432C4.71227 3.00432 3.34654 4.30001 3.34654 5.89881ZM3.29159 1.04296C4.25069 0.386354 5.41205 -6.10352e-05 6.66578 -6.10352e-05C9.95152 -6.10352e-05 12.6151 2.64115 12.6151 5.89881C12.6151 9.15647 9.95152 11.7977 6.66578 11.7977C5.41205 11.7977 4.25069 11.4113 3.29159 10.7547V15.7304H0.00012207V0.331109H3.29159V1.04296ZM63.9414 5.89883C63.9414 7.49762 65.3072 8.79332 66.9923 8.79332C68.6774 8.79332 70.0432 7.49762 70.0432 5.89883C70.0432 4.30004 68.6774 3.00434 66.9923 3.00434C65.3072 3.00434 63.9414 4.30004 63.9414 5.89883ZM73.3947 7.55558C73.3947 8.43981 73.6157 8.79302 74.2122 8.79302C74.5805 8.79302 74.7644 8.74894 74.7644 8.74894V11.4886C74.4109 11.5988 73.9248 11.6655 73.2839 11.6655C72.5552 11.6655 71.9363 11.5329 71.4723 11.2676C71.0735 11.0074 70.7873 10.7046 70.6062 10.3622C69.5638 11.2543 68.2089 11.7977 66.7239 11.7977C63.4385 11.7977 60.7746 9.15649 60.7746 5.89883C60.7746 2.64117 63.4385 -3.75601e-05 66.7239 -3.75601e-05C67.9798 -3.75601e-05 69.1426 0.387887 70.1026 1.0463V0.331132H73.3947V7.55558ZM40.7509 4.51362L41.7275 4.66155C44.1136 5.02502 45.4428 6.09279 45.4428 7.95634C45.4428 10.2286 43.7037 11.8181 40.5109 11.8181C39.0111 11.8181 36.9218 11.4099 35.4902 10.3992L36.7219 8.08766C37.828 8.75362 38.7047 9.13611 40.3633 9.13611C41.7381 9.13611 42.4436 8.84238 42.4436 8.19483C42.4436 7.66079 41.8863 7.36555 40.6142 7.18351L39.7167 7.05883C37.1714 6.70653 35.9102 5.59287 35.9102 3.71845C35.9102 1.45762 37.5431 0.00011268 40.4403 0.00011268C42.2012 0.00011268 43.7166 0.362679 45.1823 1.07875L44.1592 3.46849C43.2837 3.03679 41.8863 2.58245 40.6483 2.57068C39.5234 2.57068 38.9553 2.96826 38.9553 3.57053C38.9553 4.2069 39.7508 4.3663 40.7509 4.51362ZM53.3496 8.79332C51.6645 8.79332 50.2987 7.49762 50.2987 5.89883C50.2987 4.30004 51.6645 3.00434 53.3496 3.00434C55.0347 3.00434 56.4005 4.30004 56.4005 5.89883C56.4005 7.49762 55.0347 8.79332 53.3496 8.79332ZM53.618 -3.75601e-05C52.3642 -3.75601e-05 51.2029 0.386378 50.2438 1.04298V0.331132H46.9523V15.7304H50.2438V10.7547C51.2029 11.4113 52.3642 11.7977 53.618 11.7977C56.9034 11.7977 59.5672 9.15649 59.5672 5.89883C59.5672 2.64117 56.9034 -3.75601e-05 53.618 -3.75601e-05ZM20.7103 0.331196C20.7103 0.331196 18.4528 0.331196 17.4158 1.85361V0.331196H14.1243V11.4663H17.4158V6.24969C17.7252 3.63263 20.7103 3.59218 20.7103 3.59218C20.9841 2.45497 21.7005 0.41029 21.7005 0.41029C21.0653 0.3158 20.7103 0.331196 20.7103 0.331196ZM28.096 8.81506C28.9135 8.81506 29.5988 8.52826 30.1509 7.97551C30.7031 7.40132 30.9905 6.71664 30.9905 5.89913C30.9905 5.08162 30.7031 4.39664 30.1509 3.84419C29.5988 3.27 28.9135 2.9823 28.096 2.9823C27.2785 2.9823 26.5941 3.27 26.0413 3.84419C25.4892 4.39664 25.2021 5.08162 25.2021 5.89913C25.2021 6.71664 25.4892 7.42336 26.0413 7.97551C26.5941 8.52826 27.2785 8.81506 28.096 8.81506ZM23.6996 1.72313C24.9147 0.574151 26.3731 -3.75601e-05 28.096 -3.75601e-05C29.7977 -3.75601e-05 31.2558 0.574151 32.4712 1.72313C33.686 2.85008 34.2828 4.24207 34.2828 5.89913C34.2828 7.55558 33.686 8.94759 32.4712 10.0966C31.2558 11.2235 29.7977 11.7977 28.096 11.7977C26.3731 11.7977 24.9147 11.2235 23.6996 10.0966C22.5065 8.94759 21.91 7.55558 21.91 5.89913C21.91 4.24207 22.5065 2.85008 23.6996 1.72313Z'
              />
              <defs>
                <clipPath id='clip0_1685_504'>
                  <rect width='75.0769' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
          , giving our designers and developers the tools to help small businesses keep moving.
        </p>
        <p className='mb-8 '>
          Previously I built design systems for{' '}
          <a href='#' className='link'>
            Deputy
          </a>{' '}
          &{' '}
          <a href='#' className='link'>
            JobAdder
          </a>
          , as well as designed products for{' '}
          <a href='#' className='link'>
            SafetyCulture
          </a>
          ,{' '}
          <a href='#' className='link'>
            Hudl
          </a>{' '}
          and{' '}
          <a href='#' className='link'>
            Fairfax Media
          </a>
          .
        </p>

        <h4 className='mb-4 font-semibold'>Get in touch </h4>
        <div className='flex flex-wrap gap-2'>
          <Link href='https://twitter.com/BrodyMaclean'>
            <a
              target='_blank'
              className='inline-flex items-center h-8 px-3 border-none rounded-md text-sky-400 bg-neutral-800 hover:bg-neutral-750 hover:text-sky-300'
            >
              <IconBrandTwitter size={16} color='currentColor' stroke={1.5} className={`mr-2 inline-block`} />
              Twitter
            </a>
          </Link>

          <Link href='https://www.instagram.com/brody/'>
            <a
              target='_blank'
              className='inline-flex items-center h-8 px-3 text-pink-400 border-none rounded-md bg-neutral-800 hover:bg-neutral-750 hover:text-pink-300'
            >
              <IconBrandInstagram size={16} color='currentColor' stroke={1.5} className={`mr-2 inline-block`} />
              Instagram
            </a>
          </Link>
          <Link href='mailto:hello@brody.com'>
            <a
              target='_blank'
              className='inline-flex items-center h-8 px-3 text-yellow-400 border-none rounded-md bg-neutral-800 hover:bg-neutral-750 hover:text-yellow-300'
            >
              <IconAt size={16} color='currentColor' stroke={1.5} className={`mr-2 inline-block`} />
              Email
            </a>
          </Link>
          {/* 
          <Link href='https://www.instagram.com/brody/'>
            <a
              target='_blank'
              className='inline-flex items-center h-8 px-3 text-pink-400 border-none rounded-md bg-neutral-800 hover:bg-neutral-750 hover:text-pink-300'
            >
              <IconBrandInstagram size={16} color='currentColor' stroke={1.5} className={`mr-2 inline-block`} />
              Instagram
            </a>
          </Link> */}
        </div>
      </section>
      <section>
        <h2 className='mb-10'>Recent activity</h2>

        <div className='mb-10'>
          <h4 className='mb-5 '>Recent tracks</h4>
          <NowPlaying />
          <RecentlyPlayed />
        </div>

        <div className='mb-10'>
          <h4 className='mb-5 '>Currently reading</h4>
          <Reading />
        </div>
      </section>
    </>
    // <div className='grid grid-cols-1 p-4 md:grid-cols-3 lg:grid-cols-4 md:p-0'>
    //   {posts.map(({ slug, frontmatter }) => (
    //     <div key={slug} className='flex flex-col m-2 overflow-hidden border border-gray-200 shadow-lg rounded-xl'>
    //       <Link href={`/post/${slug}`}>
    //         <a>
    //           <Image width={650} height={340} alt={frontmatter.title} src={`/${frontmatter.socialImage}`} />
    //           <h1 className='p-4'>{frontmatter.title}</h1>
    //         </a>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}
