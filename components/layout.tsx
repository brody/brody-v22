import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/nav';
import List from '../components/list';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col w-full h-full min-h-screen lg:flex-row lg:relative text-neutral-350'>
      {/* <Head></Head> */}
      <Nav />
      {/* <List posts={undefined} /> */}

      <div id='main' className='flex flex-col flex-1 max-w-2xl px-5 pt-12 pb-12 mx-auto lg:px-8 lg:pt-32'>
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
}
