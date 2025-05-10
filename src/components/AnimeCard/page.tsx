import React, { FC } from 'react'

interface AnimeCardProps {
  title: string;
  synopsis: string;
  genres: string[];
  link: string;
  episodes: number;
}

const AnimeCard: FC<AnimeCardProps> = ({ title, synopsis, genres, link, episodes }) => {
  return (
    <div className="card card-compact md:card-mormal w-full md:w-[40rem] bg-base-100 shadow-xl mx-auto">
        <figure>
            <div className="video-responsive w-full">
                <iframe
                    src={link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="w-full h-64 md:h-96"
                ></iframe>
            </div>
        </figure>
        <div className="card-body">
            <h2 className="card-title tracking-tight cursor-pointer whitespace-nowrap overflow-auto noScroolBar nunito">
                {title}
            </h2>
            <div className="text-lg">
                🎥 · {" "}
                <span className="font-semibold">Episodes: {episodes}</span>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 wrap flex-nowrap overflow-auto pb-2 noScroolBar">
                {genres.map((genre) => (
                    <div key={genre} className="badge badge-primary badge-outline whitespace-nowrap">
                        {genre}
                    </div>
                ))}
            </div>
            <div className="opacity-75 h-16 md:h-20 overflow-auto text-sm md:text-base">
                {synopsis}
            </div>
            <div className="card-actions justify-between">
                <button className="btn btn-primary btn-sm md:btn-md nunito">
                    <span className="mr-1">⬅️</span> Back
                </button>
                <button className="btn btn-primary btn-sm md:btn-md nunito">
                    <span className="mr-1">🙈</span> Hide
                </button>
                <button className="btn btn-primary btn-sm md:btn-md nunito">
                    Next <span className="ml-1">➡️</span>
                </button>
				</div>
			</div>
		</div>
	);
};

export default AnimeCard;