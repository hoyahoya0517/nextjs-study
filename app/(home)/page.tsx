import { Metadata } from "next";
import Link from "next/link";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    "https://nomad-movies.nomadcoders.workers.dev/movies"
  );
  const json = await response.json();
  return json;
}

export const metadata: Metadata = {
  title: "home",
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      <h1>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </div>
        ))}
      </h1>
    </div>
  );
}
