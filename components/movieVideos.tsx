async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`
  );
  const json = await response.json();
  return json;
}

export default async function MovieVideo({ id }) {
  const videos = await getVideos(id);
  return <div>{JSON.stringify(videos)}</div>;
}
