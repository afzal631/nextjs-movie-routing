import Movie from "../movie";

export default async function Home() {
  const data_nowplaying = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
  );
  const res_now = await data_nowplaying.json();
    //   console.log(res_now);

  return (
    <main>
      {res_now ? (
        <div className="grid gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 px-24 py-[3rem]">
          {res_now.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
