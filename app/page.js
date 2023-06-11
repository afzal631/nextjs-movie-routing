import Movie from "./movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  //   console.log(res);
  const data_toprating = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`
  );
  const res_top = await data_toprating.json();
  //   console.log(res_top);
  const data_nowplaying = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
  );
  const res_now = await data_nowplaying.json();
  //   console.log(res_now);
  const data_upcoming = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
  );
  const res_coming = await data_upcoming.json();
  //   console.log(res_now);

  return (
    <main>
      <div className="grid gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:px-24 xs:px-11 py-[3rem]">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
