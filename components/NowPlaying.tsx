import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';
import Image from 'next/image';

import fetcher from '../lib/fetcher';
import { NowPlayingSong } from '../lib/types';
import { IconMusic } from '@tabler/icons';

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)',
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar2',
      {
        transform: ['scaleY(1.0) translateY(0rem)', 'scaleY(3) translateY(-0.083rem)', 'scaleY(1.0) translateY(0rem)'],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)',
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out'],
      }
    );
  }, []);

  return (
    <div className='flex items-end justify-between w-4 h-4  px-0.5 pb-0.5 overflow-hidden'>
      <span id='bar1' className='w-0.5 h-2 bg-indigo-500 opacity-75 rounded' />
      <span id='bar2' className='w-0.5 h-1 bg-indigo-500 rounded' />
      <span id='bar3' className='w-0.5 h-3 bg-indigo-500 opacity-80 rounded' />
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <>
      {data?.songUrl ? (
        <>
          <div className='flex flex-row w-full max-w-3xl mb-4'>
            <Image src={data.albumImageUrl} width='80' height='80' alt='' className='p-10 rounded-md' />
            <div className='flex flex-col pl-4'>
              <p className='flex items-center max-w-lg mb-1 text-indigo-400 truncate small w-60 sm:w-96 md:w-full'>
                <AnimatedBars />
                <span className='inline-block ml-2'>Now playing</span>
              </p>
              <a
                className='max-w-lg font-medium truncate text-neutral-250 w-60 sm:w-96 md:w-full'
                href={data.songUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                {data.title}
              </a>
              <p className='max-w-lg mb-0 truncate text-neutral-450 w-60 sm:w-96 md:w-full'>{data.artist}</p>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}
