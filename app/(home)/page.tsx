import { Metadata } from "next";
import styles from "./home.module.css";
import Moive from "../../components/movie";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <div className={styles.container}>
      {movies.map((movie) => (
        <Moive movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
