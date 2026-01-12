import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experiance from "@/components/Experiance";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Brands from "@/components/Brands";

export default function Home() {
	return (
		<main className="relative bg-black-100 flex items-center justify-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProjects />
				<Skills />
				{/* <Clients /> */}
			</div>
			<Brands />
			<div className="max-w-7xl w-full">
				<Experiance />
				<Process />
				<Footer />
			</div>
		</main>
	);
}
