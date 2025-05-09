import React, { FC } from "react";
import Image from "next/image";
import Mood2AnimeLogo from "@/public/icon.png";
import Link from "next/link";

interface NavbarProps {
	isHome: boolean;
}

const Navbar: FC<NavbarProps> = ({ isHome }) => {
	return (
		<Link href={"/"}>
			<div className="navbar bg-base-100 rounded-box shadow-lg mb-4 md:mb-6 max-w-[40rem] mx-auto">
				<div className={`navbar-start ${isHome ? "" : "w-1/4"}`}>
					<div className="btn btn-square btn-ghost">
						<div className="relative w-full aspect-square m-1">
							<span className="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0">
								<Image
									src={Mood2AnimeLogo}
									width={500}
									height={500}
									alt="Mood2Anime Logo"
								/>
							</span>
						</div>
					</div>
				</div>
				<div
					className={`navbar-center ${
						isHome ? "" : "w-1/2 justify-center"
					}`}
				>
					{isHome ? (
						<div className="text-center text-xl">Mood2Anime</div>
					) : (
						<div className="text-center tracking-tight">
							Feeling 😕 Gloomy
						</div>
					)}
				</div>
				<div className={`navbar-end ${isHome ? "" : "w-1/4"}`}>
					{isHome ? (
						""
					) : (
						<button className="btn btn-primary btn-square md:btn-block">
							Edit Mood
						</button>
					)}
				</div>
			</div>
		</Link>
	);
};

export default Navbar;
