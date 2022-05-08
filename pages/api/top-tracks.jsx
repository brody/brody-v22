import { getTopTracks } from '../../lib/spotify';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    title: track.name,
    albumImageUrl: track.album.images[0].url,
    songUrl: track.external_urls.spotify,
  }));

  return res.status(200).json({ tracks });
};
