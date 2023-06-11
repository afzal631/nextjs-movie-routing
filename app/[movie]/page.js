import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MOVIEDB",
  description: "Generated by create next app",
};

export default async function IndividualMovie({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // console.log(res);
  const similar = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${process.env.API_KEY}`
  );
  const sim = await similar.json();
  console.log(sim);

  let number = Math.round(res.vote_average);
  let numbers = [];

  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  const placeholderImage =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4Q3zaHR0cDovL....";

  return (
    <div>
      <div className="lg:px-36 sm:px-[4rem] py-10 xs:px-[2rem] ">
        <h1 className="lg:text-[3rem]  sm:text-[2rem] xs:text-[2rem] text-yellow-300">
          {res?.title}
        </h1>
        <div className="flex">
          <h2 className="text-lg">Released on :</h2>
          <h2 className="text-lg bg-red-500 w-fit ml-1 px-1">
            {res?.release_date}
          </h2>
        </div>
        <h2>{res.runtime} minutes</h2>
        <div className="flex justify-between flex-wrap">
          <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
            {res?.status}
          </h2>
          <div className="flex mt-2 justify-between ">
            <div className="flex items-center">
              <div className="flex items-center">
                Ratings:
                {numbers?.map(() => {
                  return (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path
                        fill="#FFD700"
                        d="M12 2L9.18 8.59L3.41 9.82L7.08 14.1L6 19L12 16.27L18 19L16.92 14.1L20.59 9.82L14.82 8.59L12 2Z"
                      />
                    </svg>
                  );
                })}
                {number}/10
              </div>
            </div>
          </div>
        </div>
        <h2 className="flex justify-center mb-2 ">
          <i className="text-yellow-300">"{res?.tagline}"</i>
        </h2>
        <Link href={res?.homepage} target="_blank">
          <Image
            className="my-4 w-full"
            src={imagePath + res?.backdrop_path}
            width={1000}
            height={1000}
            loading="lazy"
            blurDataURL={placeholderImage}
          />
        </Link>

        <div className="flex justify-end my-2">
          <h2 className="text-lg flex justify-start lg:items-center xs:items-start sm:items-start ">
            Languages:{" "}
          </h2>
          <div className="flex w-full flex-wrap ml-2">
            {res.spoken_languages?.map((lang) => {
              return (
                <div className="px-2 py-2 mr-1 my-1 rounded-[1rem] text-sm border transition hover:bg-green-600 ">
                  {lang.name}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-[18px] mr-2 mb-2">Overview: </h2>
          <p>
            <i>"{res.overview}"</i>
          </p>
        </div>
        <div className="flex w-full flex-wrap  mt-2 ">
          {res.genres?.map((genra) => {
            return (
              <div className="px-2 py-2 mr-1 my-1 text-sm rounded-[1rem] border transition hover:bg-green-600 ">
                {genra.name}
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="text-lg my-6">Similar Movies:</h1>
          <div className="flex  ">
            <div className="overflow-x-auto flex gap-3 scrollbar my-4 py-5">
              {sim.results?.map((sim) => {
                return (
                  <div className="block-ins-item flex flex-col md:min-w-[24%] sm:min-w-[39%] xs:min-w-[53%] lg:min-w-[16%] justify-between ">
                    <Link
                      className="block-ins-img"
                      target="_blank"
                      data-id="1453"
                      href="/"
                    >
                      <Image
                        src={imagePath + sim?.backdrop_path}
                        alt="Image "
                        width={200} // Set the width to a small value, such as 200px
                        height={150}
                        // loading="lazy"
                      />
                    </Link>
                    <div className="block-ins-caption text-sm">
                      {sim?.title}
                    </div>

                    <div className="text-sm bg-green-400 rounded-md p-2 text-center">
                       {sim?.release_date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
