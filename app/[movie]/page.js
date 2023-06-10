import React from "react";
import Image from "next/image";

export const metadata = {
  title: "MOVIEDB",
  description: "Generated by create next app",
};

export default async function IndividualMovie({ params }) {
  console.log(params);
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  //   console.log(res);

  return (
    <div>
      <div
        className="lg:px-36 sm:px-[4rem] py-10"
        style={{
          "@media (min-width: 220px)": {
            padding: "4rem",
            // color: 'white',
          },
        }}
      >
        <h1 className="text-2xl">{res.title}</h1>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>{res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
          {res.status}
        </h2>
        <Image
          className="my-4 w-full"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
