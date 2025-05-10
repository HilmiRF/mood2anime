import type { FC } from "react"

interface AnimeCardProps {
  title: string
  synopsis: string
  genres: string[]
  link: string
  episodes: number
  status: string
}

const AnimeCard: FC<AnimeCardProps> = ({ title, synopsis, genres, link, episodes, status }) => {
  return (
        <div className="card card-compact md:card-normal w-full md:w-[40rem] bg-base-100 shadow-xl mx-auto">
            <figure className="relative pt-[56.25%] w-full overflow-hidden bg-gray-100">
                <img
                src={link || "/placeholder.svg"}
                alt={`${title} cover image`}
                className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-2 right-2 badge badge-secondary">{episodes} Episodes</div>
            </figure>
            <div className="card-body">
                <h2 className="card-title tracking-tight cursor-pointer whitespace-nowrap overflow-auto noScroolBar">
                {title}
                </h2>
                <div className="text-lg flex items-center gap-2">
                    <span className="text-xl">🎬</span>
                    <span className="font-semibold">Status: {status}</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-2 flex-wrap overflow-auto pb-2 noScroolBar">
                {genres.map((genre) => (
                    <div key={genre} className="badge badge-primary badge-outline whitespace-nowrap">
                    {genre}
                    </div>
                ))}
                </div>
                <div className="opacity-75 h-16 md:h-20 overflow-auto text-sm md:text-base custom-scrollbar">{synopsis}</div>
                <div className="card-actions justify-between mt-2">
                    <button className="btn btn-primary btn-sm md:btn-md">
                        <span className="mr-1">⬅️</span> Back
                    </button>
                    <button className="btn btn-primary btn-sm md:btn-md">
                        <span className="mr-1">🙈</span> Hide
                    </button>
                    <button className="btn btn-primary btn-sm md:btn-md">
                        Next <span className="ml-1">➡️</span>
                    </button>
                </div>
            </div>
        </div>
	);
};

export default AnimeCard;