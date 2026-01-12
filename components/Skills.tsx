import React from "react";
import { skills } from "@/data";
import CardHoverEffect from "./ui/CardHoverEffect";

const Skills = () => {
	return (
		<section id="technologies" className="py-20">
			<h1 className="heading">
				Building Digital <span className="text-purple">Experiences</span>.
			</h1>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 mt-10 md:mt-20">
				{skills.map((skill) => (
					<CardHoverEffect
						key={skill.id}
						title={skill.title}
						description={skill.description}
						skills={skill.skills}
					></CardHoverEffect>
				))}
			</div>
		</section>
	);
};

export default Skills;
