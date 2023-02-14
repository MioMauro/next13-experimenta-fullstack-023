import Link from "next/link"
import Image from "next/image"

export default function Movie({title, id, poster_path, release_date, vote_average }) {
  const imagePath = "https://image.tmdb.org/t/p/original"
  //console.log(vote_average)
  return (
    <div className="p-4">
      <h1 className="text-lg text-yellow-500">{title}</h1>
      <h2 className="text-yellow-300">Liking: {vote_average}</h2>
      <h2 className="text-sm text-yellow-100">{release_date}</h2>
      <Link href={`/${id}`}>
      <Image className="rounded-lg m-auto mt-4 mb-6"
        src={imagePath + poster_path} 
        alt={title}
        width={300}
        height={300}
        />      
        </Link>
    </div>
  )
}
