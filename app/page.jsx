import Movie from "./Movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res)
  return (
    <main className="">
    <div className="grid gap-10 grid-cols-fluid">
    {res.results.map((movie) => (
      <Movie 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
        />
    ))}
    </div>
    </main>
  )
}

//'https://api.themoviedb.org/3/movie/popular'
