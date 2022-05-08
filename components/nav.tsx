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
  { name: 'Work', href: '/work', icon: IconBrush },
  { name: 'About', href: '/about', icon: IconUserCircle },
];

const otherpages = [
  { name: 'Bookmarks', href: '/bookmarks', icon: IconBookmarks },
  { name: 'Uses', href: '/uses', icon: IconDeviceDesktopAnalytics },
  { name: 'Now', href: '/now', icon: IconCalendarEvent },
];

export default function Nav() {
  const router = useRouter();
  return (
    <nav className='sticky top-0 z-10 flex justify-between px-5 text-base font-medium leading-6 border-b md:text-sm lg:bottom-0 bg-neutral-900 lg:border-r lg:border-b-0 border-neutral-800 lg:flex-col lg:px-4 lg:pt-8 lg:pb-5 lg:w-48 lg:h-screen'>
      <div className='flex justify-between w-full lg:flex-col'>
        <Link href='/'>
          <a className='flex px-5 py-4 -ml-6 overflow-visible lg:px-4 lg:ml-0 lg:mb-4'>
            <div className='relative w-8 h-8 overflow-hidden rounded-full lg:h-12 lg:w-12 hover:ring-2 ring-blue-500'>
              <Image
                src='/brody.png'
                alt=''
                className=''
                // width={48}
                // height={48}
                layout='fill' // required
                objectFit='cover' // change to suit your needs
              />
            </div>
          </a>
        </Link>
        <ul className='flex items-center flex-hori lg:flex-col lg:items-stretch'>
          {mainpages.map((page) => (
            <li key={page.name}>
              <Link href={page.href}>
                <a
                  className={`items-center px-3 h-10 md:h-8 rounded-lg  flex-vert lg:px-4 hover:bg-neutral-800 ${
                    router.pathname === page.href ? 'bg-neutral-800 text-neutral-50' : ''
                  } ${page.name === 'Home' ? 'hidden md:flex' : 'flex'}`}
                >
                  <page.icon
                    size={16}
                    color='currentColor'
                    stroke={1.5}
                    className={`hidden mr-3 sm:block  ${
                      router.pathname === page.href ? 'text-neutral-50' : 'text-neutral-450'
                    }`}
                  />
                  {page.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className='items-center hidden lg:flex flex-hori lg:flex-col lg:items-stretch'>
        {otherpages.map((page) => (
          <li key={page.name}>
            <Link href={page.href}>
              <a
                className={`items-center px-3 h-10 md:h-8 rounded-lg md:flex flex-vert lg:px-4 hover:bg-neutral-800 ${
                  router.pathname === page.href ? 'bg-neutral-800 text-neutral-50' : ''
                }`}
              >
                <page.icon
                  size={16}
                  color='currentColor'
                  stroke={1.5}
                  className={`hidden mr-3 sm:block  ${router.pathname === page.href ? 'text-neutral-50' : ''}`}
                />
                {page.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
