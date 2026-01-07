import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Christoph Jürgens",
	description: "Christoph Jürgens - Software Engineer",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "Christoph Jürgens",
		description: "Christoph Jürgens - Software Engineer",
		url: "https://juergens.au",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
