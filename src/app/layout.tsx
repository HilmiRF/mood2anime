import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const bricolageRegular = Bricolage_Grotesque({
	variable: "--font-bricolage-grotesque",
	weight: "400",
	subsets: ["latin"],
});

const bricolageSemiBold = Bricolage_Grotesque({
	variable: "--font-bricolage-grotesque",
	weight: "600",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mood2Anime",
	description: "Find Animes based on your mood 😉",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${bricolageRegular.className} ${bricolageSemiBold.className} antialiased min-h-screen w-full p-2 lg:p-6 mb-20 md:mb-24 max-w-4xl mx-auto`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
