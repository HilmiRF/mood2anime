"use client";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface animePageProps {}

const animePage: FC<animePageProps> = ({}) => {
	const [isLoading, setIsLoading] = useState(true);
	const searchParams = useSearchParams();
	const mood = searchParams.get("mood");

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
			console.log(mood);
		}, 2000);
	}, []);

	return (
		<>
			<div className="">
				{isLoading ? (
					<div className="text-center text-lg">
						<div className="font-regular">We're fetching the best anime to watch when you're feeling
							<div className="font-semibold"> {mood} </div> Hold on tight!
						</div>
					</div>
				) : (
					<div className="card card-compact md:card-mormal w-full md:w-[40rem] bg-base-100 shadow-xl mx-auto">
						<figure>
							<div className="video-responsive w-full">
							<iframe
								src="https://www.youtube.com/embed/6ZfuNTqbHE8?modestbranding=1&amp;playsinline=1&amp;rel=0&amp;enablejsapi=1&amp;autohide=1&amp;showinfo=0"
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
							Danzeru Markeru
						</h2>
						<div className="text-lg">
							2018 · 2h 29min · ⭐{" "}
							<span className="font-semibold">8.4</span>
							<span className="opacity-75">/10</span>
						</div>
						<div className="flex flex-row justify-start items-center gap-2 wrap flex-nowrap overflow-auto pb-2 noScroolBar">
							<div className="badge badge-primary badge-outline whitespace-nowrap nunito">
								Adventure
							</div>
							<div className="badge badge-primary badge-outline whitespace-nowrap nunito">
								Sci-Fi
							</div>
							<div className="badge badge-primary badge-outline whitespace-nowrap nunito">
								Action
							</div>
						</div>
						<div className="opacity-75 h-16 md:h-20 overflow-auto text-sm md:text-base">
							Danzeru and his allies must be willing to sacrifice
							all in an attempt to defeat the powerful Jonathan
							Markitan from the efforts to bring an end to the
							universe of sawer.
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
				)}
			</div>
		</>
	);
};

export default animePage;
