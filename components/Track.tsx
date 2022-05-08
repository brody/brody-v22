import Image from 'next/image';
import {
  format,
  formatDistance,
  parseISO,
  subDays,
  subMinutes,
  subHours,
  isSameMinute,
  formatDistanceToNow,
  formatDistanceStrict,
} from 'date-fns';
import { IconMusic } from '@tabler/icons';

// function relativeTime(comparisonDate) {
//   const thisHour = new Date();
//   const today = new Date();
//   const yesterday = subDays(today, 1);
//   const aWeekAgo = subDays(today, 7);
//   const twoWeeksAgo = subDays(today, 14);
//   const threeWeeksAgo = subDays(today, 21);

//   // Get the date in English locale to match English day of week keys
//   const compare = parseISO(comparisonDate);

//   let result = '';
//   if (isSameMinute(compare, today)) {
//     result = intl.t('Updated.Today');
//   } else if (isSameMinute(compare, yesterday)) {
//     result = intl.t('Updated.Yesterday');
//   } else if (isAfter(compare, aWeekAgo)) {
//     result = intl.t(`Updated.${format(compare, 'EEEE')}`);
//   } else if (isAfter(compare, twoWeeksAgo)) {
//     result = intl.t('Updated.LastWeek');
//   } else if (isAfter(compare, threeWeeksAgo)) {
//     result = intl.t('Updated.TwoWeeksAgo');
//   }

//   return result;
// }
function time(trackPlayedAt) {
  const convertTime = parseISO(trackPlayedAt);
  const relTime = formatDistanceStrict(convertTime, new Date(), { addSuffix: true });
  return relTime;
}

export default function Track(track) {
  const i = { time };
  return (
    <div className='flex flex-row w-full max-w-3xl mb-4'>
      <Image src={track.albumImageUrl} width='80' height='80' alt='' className='w-20 p-10 rounded-md' />
      <div className='flex flex-col pl-4'>
        <p className='flex items-center max-w-lg mb-1 text-indigo-400 truncate small w-60 sm:w-96 md:w-full'>
          <IconMusic size={16} color='currentColor' stroke={1.5} className={`mr-2 inline-block text-indigo-400`} />
          {time(track.playedAt)}
        </p>
        <a
          className='max-w-lg font-medium truncate text-neutral-250 w-60 sm:w-96 md:w-full'
          href={track.songUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          {track.title}
        </a>
        <p className='max-w-lg mb-0 truncate text-neutral-450 w-60 sm:w-96 md:w-full'>{track.artist}</p>
      </div>
    </div>
  );
}
