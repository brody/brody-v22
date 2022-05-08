import { getRecentlyPlayed } from '../../lib/spotify';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  const tracks = items.slice(0, 3).map((track) => ({
    artist: track.track.artists.map((_artist) => _artist.name).join(', '),
    title: track.track.name,
    albumImageUrl: track.track.album.images[0].url,
    songUrl: track.track.external_urls.spotify,
    playedAt: track.played_at,
  }));

  return res.status(200).json({ tracks });
};
