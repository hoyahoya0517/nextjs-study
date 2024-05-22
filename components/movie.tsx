"use client";

import { useRouter } from "next/navigation";
import styles from "./moive.module.css";
import Link from "next/link";

export default function Moive({ movie }) {
  const router = useRouter();
  const clickHandle = () => {
    router.push(`/movies/${movie.id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={movie.poster_path} onClick={clickHandle} />
      <Link prefetch href={`/movies/${movie.id}`}>
        {movie.title}
      </Link>
    </div>
  );
}
