"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}: {
	words: string;
	className?: string;
	filter?: boolean;
	duration?: number;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");
	const COLOR_TRANSITION_INDEX = 3;
	
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
				filter: filter ? "blur(0px)" : "none",
			},
			{
				duration: duration || 1,
				delay: stagger(0.2),
			},
		);
	}, [animate, filter, duration]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={idx}
							className={`${
								idx > COLOR_TRANSITION_INDEX ? "text-purple" : "text-white"
							} opacity-0`}
							style={{
								filter: filter ? "blur(10px)" : "none",
							}}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="my-4">
				<div className="text-white leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
