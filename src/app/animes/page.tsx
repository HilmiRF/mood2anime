"use client";

import AnimeCard from "@/components/AnimeCard/page";
import Loading from "@/components/Loading/page";
import { useSearchParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

interface AnimeData {
	_id: string;
	title: string;
	synopsis: string;
	genres: string[];
	image: string;
	episodes: number;
	status: string;
}

interface animePageProps {}

const animePage: FC<animePageProps> = ({}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [animes, setAnimes] = useState<AnimeData[]>([]);
	const [error, setError] = useState<string | null>(null);
	const searchParams = useSearchParams();
	const mood = searchParams.get("mood");

	useEffect(() => {
		const fetchAnimes = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(`/api/animes?mood=${mood || ''}`);
				
				if (!response.ok) {
					throw new Error('Failed to fetch anime data');
				}
				
				const data = await response.json();
				setAnimes(data.data || []);
				setError(null);
			} catch (err) {
				console.error('Error fetching animes:', err);
				setError('Failed to load anime recommendations. Please try again later.');
			} finally {
				setIsLoading(false);
			}
		};

		fetchAnimes();
	}, [mood]);

	return (
		<>
			<div className="">
				{isLoading ? (
					<Loading mood={mood || ""} />
				) : error ? (
					<div className="text-center text-red-500">{error}</div>
				) : animes.length === 0 ? (
					<div className="text-center">No anime found for this mood. Try another mood?</div>
				) : (
					<AnimeCard
						key={animes[0]._id}
						title={animes[0].title}
						synopsis={animes[0].synopsis}
						genres={animes[0].genres}
						link={animes[0].image}
						episodes={animes[0].episodes}
						status={animes[0].status}
					/>
				)}
			</div>
		</>
	);
};

export default animePage;
