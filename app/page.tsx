import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";
import Grid from "@/components/Grid";

export default function Home() {
	return (
		<main className="relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto sm:px10 px-5">
			<div className="max-w-7xl w-full">
				<FloatingNav
					navItems={[
						{ name: "Home", link: "/", icon: <FaHome /> },
						{ name: "About", link: "/about", icon: <FaUser /> },
						{ name: "Contact", link: "/contact", icon: <FaEnvelope /> },
					]}
				/>
				<Hero />
				<Grid />
			</div>
		</main>
	);
}
