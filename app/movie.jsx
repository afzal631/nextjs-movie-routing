import Link from "next/link";
import React from "react";
import Image from "next/image";

function Movie({ key, id, title, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div key={key}  >
    <div>
      <h1 >{title}</h1>
      <h3>Release: {release_date}</h3>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
          loading="lazy"
        />
      </Link>
    </div>
    </div>
  );
}

export default Movie;
