"use client";

import AnimeCard from "@/components/AnimeCard/page";
import Loading from "@/components/Loading/page";
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
					<Loading mood={mood || ""} />
				) : (
					<AnimeCard
						title="Gintama"
						synopsis="Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]"
						genres={["Action", "Adventure", "Comedy"]}
						link="https://cdn.myanimelist.net/images/anime/1245/116760.webp"
						episodes={51}
						status="Finished Airing"
					/>
				)}
			</div>
		</>
	);
};

export default animePage;
