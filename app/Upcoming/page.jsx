import Movie from "../movie";

export default async function Home() {
  const data_upcoming = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
  );
  const res_coming = await data_upcoming.json();
//   console.log(res_now);

  return (
    <main>
      <div className="grid gap-16 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:px-24 xs:px-11 py-[3rem]">
        {res_coming.results.map((movie) => (
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
