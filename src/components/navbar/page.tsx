import React, { FC } from "react";
import Image from "next/image";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<div className="navbar bg-base-100 rounded-box shadow-lg mb-4 md:mb-6 max-w-[40rem] mx-auto">
			<div className="navbar-start">
				<div className="btn btn-square btn-ghost">
					<div className="relative w-full aspect-square m-1">
						<div className="relative w-full aspect-square m-1">
							<Image
								width={"24"}
								height={"24"}
								src="../../../public/icon.svg"
								alt={"Mood2Anime Logo"}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar-center">
				<div className="text-center text-xl">Mood2Anime</div>
			</div>
			<div className="navbar-end"></div>
		</div>
	);
};

export default Navbar;
