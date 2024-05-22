import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movieInfo";
import MovieVideo from "../../../../components/movieVideos";

interface Parmas {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Parmas) {
  const moive = await getMovie(id);
  return {
    title: moive.title,
  };
}

export default async function MovieDetail({ params: { id } }: Parmas) {
  return (
    <div>
      <Suspense fallback={<h1>loading info....</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading videosx...</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
