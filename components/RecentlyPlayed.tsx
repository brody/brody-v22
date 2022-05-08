import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import { RecentlyPlayed } from '../lib/types';
import Track from './Track';

export default function Tracks() {
  const { data } = useSWR<RecentlyPlayed>('/api/recently-played', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track) => (
        <Track key={track.songUrl} {...track} />
      ))}
    </>
  );
}
