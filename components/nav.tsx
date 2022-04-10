import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconHome2,
  IconNotebook,
  IconBookmarks,
  IconBrush,
  IconUserCircle,
  IconDeviceDesktopAnalytics,
  IconCalendarEvent,
} from '@tabler/icons';

const mainpages = [
  { name: 'Home', href: '/', icon: IconHome2 },
  { name: 'Journal', href: '/journal', icon: IconNotebook },
  { name: 'Bookmarks', href: '/bookmarks', icon: IconBookmarks },
  { name: 'Work', href: '/work', icon: IconBrush },
];

const otherpages = [
  { name: 'About', href: '/about', icon: IconUserCircle },
  { name: 'Uses', href: '/uses', icon: IconDeviceDesktopAnalytics },
  { name: 'Now', href: '/now', icon: IconCalendarEvent },
];

export default function Nav() {
  const router = useRouter();
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
          {mainpages.map((page) => (
            <>
              <Link href={page.href}>
                <a
                  className={`items-center hidden px-3 py-1 rounded-lg md:flex flex-vert lg:px-4 hover:bg-zinc-800 ${
                    router.pathname === page.href ? 'bg-zinc-800 text-zinc-50' : ''
                  }`}
                >
                  <page.icon
                    size={16}
                    color='currentColor'
                    stroke={1.5}
                    className={`hidden mr-3 sm:block  ${router.pathname === page.href ? 'text-zinc-50' : ''}`}
                  />
                  {page.name}
                </a>
              </Link>
            </>
          ))}
        </ul>
      </div>
      <ul className='items-center hidden lg:flex flex-hori lg:flex-col lg:items-stretch'>
        {otherpages.map((page) => (
          <>
            <Link href={page.href}>
              <a
                className={`items-center hidden px-3 py-1 rounded-lg md:flex flex-vert lg:px-4 hover:bg-zinc-800 ${
                  router.pathname === page.href ? 'bg-zinc-800 text-zinc-50' : ''
                }`}
              >
                <page.icon
                  size={16}
                  color='currentColor'
                  stroke={1.5}
                  className={`hidden mr-3 sm:block  ${router.pathname === page.href ? 'text-zinc-50' : ''}`}
                />
                {page.name}
              </a>
            </Link>
          </>
        ))}
      </ul>
    </nav>
  );
}
