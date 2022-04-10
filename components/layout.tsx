import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/nav';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col w-full h-full min-h-screen lg:flex-row lg:relative bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300'>
      {/* <Head></Head> */}
      <Nav />

      <div
        id='list'
        className='sticky top-0 bottom-0 flex-col hidden h-screen overflow-y-auto border-r lg:flex w-80 border-zinc-200 dark:border-zinc-800 overscroll-contain'
      >
        <div
          id='list-title'
          className='sticky top-0 w-full px-8 pt-12 pb-5 text-xl font-semibold border-b bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-50'
        >
          Journal
        </div>
        <div id='list-items' className='flex flex-col h-screen px-4 pb-4'>
          <span className='px-4 pt-8 pb-4 text-lg font-semibold year text-zinc-100'>2022</span>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>
                What I need in a digital workspace and other musings of remote life
              </div>
              <div className='text-xs uppercase text-zinc-400'>Oct 19</div>
            </div>
          </a>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800 bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium text-zinc-50'>Figma Essentials</div>
              <div className='text-xs uppercase text-zinc-300'>Jun 13</div>
            </div>
          </a>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>Design systems as knowledge graphs</div>
              <div className='text-xs uppercase text-zinc-400'>Jan 02</div>
            </div>
          </a>

          <span className='px-4 pt-8 pb-4 text-lg font-semibold year text-zinc-100'>2021</span>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>
                What I need in a digital workspace and other musings of remote life
              </div>
              <div className='text-xs uppercase text-zinc-400'>Oct 19</div>
            </div>
          </a>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>Figma Essentials</div>
              <div className='text-xs uppercase text-zinc-400'>Jun 13</div>
            </div>
          </a>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>Design systems as solution for agencies</div>
              <div className='text-xs uppercase text-zinc-400'>Jan 02</div>
            </div>
          </a>

          <span className='px-4 pt-8 pb-4 text-lg font-semibold year text-zinc-100'>2020</span>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>Utilities for setting the maximum width of an element</div>
              <div className='text-xs uppercase text-zinc-400'>Oct 19</div>
            </div>
          </a>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>Figma Essentials</div>
              <div className='text-xs uppercase text-zinc-400'>Jun 13</div>
            </div>
          </a>
          <a href='' className='flex items-center px-4 py-3 rounded-lg flex-vert hover:bg-zinc-800'>
            <div className='flex flex-col justify-center space-y-1'>
              <div className='text-sm font-medium'>Design systems as solution for agencies</div>
              <div className='text-xs uppercase text-zinc-400'>Jan 02</div>
            </div>
          </a>
        </div>
      </div>

      <div id='main' className='flex flex-col flex-1 px-5 pt-12 pb-12 lg:px-8 lg:pt-32'>
        <div className='max-w-2xl mx-auto'>{children}</div>
      </div>
    </div>
  );
}
