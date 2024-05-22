import styles from "./movieVideos.module.css";

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`
  );
  const json = await response.json();
  return json;
}

export default async function MovieVideo({ id }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.key}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
