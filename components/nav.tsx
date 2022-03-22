import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='sticky top-0 z-10 flex justify-between px-5 text-sm font-medium leading-6 border-b lg:bottom-0 bg-zinc-900 lg:border-r lg:border-b-0 border-zinc-200 dark:border-zinc-800 lg:flex-col lg:px-4 lg:pt-8 lg:pb-5 lg:w-48 lg:h-screen'>
      <div className='flex justify-between w-full lg:flex-col'>
        <Link href='/'>
          <a className='flex px-5 py-4 -ml-6 overflow-visible lg:px-4 lg:ml-0 lg:mb-4'>
            <Image
              src='/brody.png'
              alt=''
              className='w-8 h-8 rounded-full lg:h-12 lg:w-12 hover:ring-2 ring-blue-500'
              width={48}
              height={48}
            />
          </a>
        </Link>
        <ul className='flex items-center flex-hori lg:flex-col lg:items-stretch'>
          <li>
            <Link href='/'>
              <a
                href='#'
                className='items-center hidden px-3 py-1 rounded-lg md:flex flex-vert lg:px-4 hover:bg-zinc-800'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='hidden mr-3 sm:block text-zinc-400'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <polyline points='5 12 3 12 12 3 21 12 19 12' />
                  <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
                  <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
                </svg>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a
                href='#'
                className='flex items-center px-3 py-1 rounded-lg flex-vert lg:px-4 hover:bg-zinc-800 bg-zinc-800 text-zinc-50'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='hidden mr-3 sm:block text-zinc-100'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18' />
                  <line x1='13' y1='8' x2='15' y2='8' />
                  <line x1='13' y1='12' x2='15' y2='12' />
                </svg>
                Journal
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='#' className='flex items-center px-3 py-1 rounded-lg flex-vert lg:px-4 hover:bg-zinc-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='hidden mr-3 sm:block text-zinc-400'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z' />
                  <path d='M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6' />
                </svg>
                Bookmarks
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a href='#' className='flex items-center px-3 py-1 rounded-lg flex-vert lg:px-4 hover:bg-zinc-800'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='hidden mr-3 sm:block text-zinc-400'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M3 21v-4a4 4 0 1 1 4 4h-4' />
                  <path d='M21 3a16 16 0 0 0 -12.8 10.2' />
                  <path d='M21 3a16 16 0 0 1 -10.2 12.8' />
                  <path d='M10.6 9a9 9 0 0 1 4.4 4.4' />
                </svg>
                Work
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <ul className='items-center hidden lg:flex flex-hori lg:flex-col lg:items-stretch'>
        <li>
          <Link href='/'>
            <a className='flex items-center px-3 py-1 rounded-lg flex-vert lg:px-4 hover:bg-zinc-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='hidden mr-3 sm:block text-zinc-400'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <circle cx='12' cy='12' r='9' />
                <circle cx='12' cy='10' r='3' />
                <path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855' />
              </svg>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='flex items-center px-3 py-1 rounded-lg flex-vert lg:px-4 hover:bg-zinc-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='hidden mr-3 sm:block text-zinc-400'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <rect x='3' y='4' width='18' height='12' rx='1' />
                <path d='M7 20h10' />
                <path d='M9 16v4' />
                <path d='M15 16v4' />
                <path d='M9 12v-4' />
                <path d='M12 12v-1' />
                <path d='M15 12v-2' />
                <path d='M12 12v-1' />
              </svg>
              Uses
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className='flex items-center px-3 py-1 rounded-lg flex-vert lg:px-4 hover:bg-zinc-800'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='hidden mr-3 sm:block text-zinc-400'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <rect x='4' y='5' width='16' height='16' rx='2' />
                <line x1='16' y1='3' x2='16' y2='7' />
                <line x1='8' y1='3' x2='8' y2='7' />
                <line x1='4' y1='11' x2='20' y2='11' />
                <rect x='8' y='15' width='2' height='2' />
              </svg>
              Now
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
