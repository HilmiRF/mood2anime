import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	return (
		<div className="flex flex-row justify-center items-center text-center gap-1 mt-6">
			Made with 🍿 by HilmiRF
		</div>
	);
};

export default Footer;
