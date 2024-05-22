async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("wo");
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
  );
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return <div>{movie.title}</div>;
}
