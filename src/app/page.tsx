"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	const handleClick = (mood: string) => {
		router.push(`/animes?mood=${mood}`);
	};

	return (
		<>
			<div className="text-center">
				<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
					Discover top-rated anime based on your mood
				</h1>
				<div className="text-xl mb-4">How are you feeling now?</div>
				<div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
					<Link
						href={`/animes?mood=${"Cheerful"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😁 Cheerful")}>
							😁 Cheerful
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Reflective"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("🤔 Reflective")}>
							🤔 Reflective
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Gloomy"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("🙁 Gloomy")}>
							🙁 Gloomy
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Humorous"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("🤣 Humorous")}>
							🤣 Humorous
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Melancholy"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😔 Melancholy")}>
							😔 Melancholy
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Chill"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😎 Chill")}>
							😎 Chill
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Romantic"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😍 Romantic")}>
							😍 Romantic
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Weird"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("🤪 Weird")}>
							🤪 Weird
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Sleepy"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("🥱 Sleepy")}>
							🥱 Sleepy
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Angry"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😡 Angry")}>
							😡 Angry
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Fearful"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😰 Fearful")}>
							😰 Fearful
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Lonely"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😢 Lonely")}>
							😢 Lonely
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Tense"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😳 Tense")}>
							😳 Tense
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Thoughtful"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("🤓 Thoughtful")}>
							🤓 Thoughtful
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Thrill-Seeking"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😆 Thrill-Seeking")}>
							😆 Fun
						</button>
					</Link>
					<Link
						href={`/animes?mood=${"Playful"}`}
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						<button onClick={() => handleClick("😃 Playful")}>
							😃 Playful
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
