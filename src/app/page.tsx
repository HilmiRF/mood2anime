import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="text-center">
				<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
					Discover top-rated anime based on your mood
				</h1>
				<div className="text-xl mb-4">How are you feeling now?</div>
				<div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline text-xl"
					>
						😁 Cheerful
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						🤔 Reflective
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						🙁 Gloomy
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						🤣 Humorous
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😔 Melancholy
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😎 Chill
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😍 Romantic
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						🤪 Weird
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						🥱 Sleepy
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😡 Angry
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😰 Fearful
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😢 Lonely
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😳 Tense
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						🤓 Thoughtful
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😆 Thrill-Seeking
					</Link>
					<Link
						href="/animes"
						className="btn md:btn-lg border-[1.5px] border-primary hover:btn-primary btn-outline"
					>
						😃 Playful
					</Link>
				</div>
			</div>
		</>
	);
}
