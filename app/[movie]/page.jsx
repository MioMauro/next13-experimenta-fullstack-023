import Image from "next/image"

export async function generateStaticParams(){
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res.results.map((movie) => ({
  movie: toString(movie.id),
  }))
}

export default async function MovieDetails({params}) {
  const {movie} = params
  const imagePath = "https://image.tmdb.org/t/p/original"
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate : 4 }})
  const res = await data.json()
  console.log(res.status)
  return (
    <div className="p-10">
      <h2 className="text-lg text-yellow-500">{res.title}</h2>
      <h2 className="text-yellow-300">{res.vote_average}</h2>
      <h2 className="text-sm text-yellow-100">{res.release_date}</h2>
      <h2 className="text-sm text-white">min: {res.runtime}</h2>
      <Image className="rounded-lg m-auto mt-4 mb-6"
        src={imagePath + res.backdrop_path} 
        alt='picture'
        width={800}
        height={800}
        />
        <div>
          <p>{res.overview}</p>
        </div>
    </div>
  )
}
