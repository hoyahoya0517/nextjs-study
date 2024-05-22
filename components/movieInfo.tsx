import styles from "./movieInfo.module.css";

export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("wo");
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
  );
  const json = await response.json();
  return json;
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>{movie.vote_average}</h3>
      </div>
    </div>
  );
}
