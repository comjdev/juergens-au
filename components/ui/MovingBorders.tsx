"use client";
import React, { useRef } from "react";
import {
	motion,
	useAnimationFrame,
	useMotionTemplate,
	useMotionValue,
	useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function Button({
	borderRadius = "1.75rem",
	children,
	as: Component = "button",
	containerClassName,
	borderClassName,
	duration,
	className,
	...otherProps
}: {
	borderRadius?: string;
	children: React.ReactNode;
	as?: any;
	containerClassName?: string;
	borderClassName?: string;
	duration?: number;
	className?: string;
	[key: string]: any;
}) {
	return (
		<Component
			className={cn(
				"relative  overflow-hidden bg-transparent p-px text-xl md:col-span-2",
				containerClassName,
			)}
			style={{
				borderRadius: borderRadius,
			}}
			{...otherProps}
		>
			<div
				className="absolute inset-0"
				style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
			>
				<MovingBorder duration={duration} rx="30%" ry="30%">
					<div
						className={cn(
							"h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
							borderClassName,
						)}
					/>
				</MovingBorder>
			</div>

			<div
				className={cn(
					"relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
					className,
				)}
				style={{
					borderRadius: `calc(${borderRadius} * 0.96)`,
				}}
			>
				{children}
			</div>
		</Component>
	);
}

export const MovingBorder = ({
	children,
	duration = 3000,
	rx,
	ry,
	...otherProps
}: {
	children: React.ReactNode;
	duration?: number;
	rx?: string;
	ry?: string;
	[key: string]: any;
}) => {
	const pathRef = useRef<SVGPathElement | null>(null);
	const progress = useMotionValue<number>(0);

	useAnimationFrame((time) => {
		const length = pathRef.current?.getTotalLength();
		if (length && length > 0) {
			const pxPerMillisecond = length / duration;
			progress.set((time * pxPerMillisecond) % length);
		}
	});

	const x = useTransform(
		progress,
		(val) => {
			try {
				const path = pathRef.current;
				if (!path) return 0;
				const length = path.getTotalLength();
				if (length === 0) return 0;
				return path.getPointAtLength(Math.min(val, length - 0.1)).x;
			} catch {
				return 0;
			}
		},
	);
	const y = useTransform(
		progress,
		(val) => {
			try {
				const path = pathRef.current;
				if (!path) return 0;
				const length = path.getTotalLength();
				if (length === 0) return 0;
				return path.getPointAtLength(Math.min(val, length - 0.1)).y;
			} catch {
				return 0;
			}
		},
	);

	const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

	// Create a path that represents the border of a rounded rectangle
	// Parse percentage values (e.g., "30%" -> 30) for use in viewBox coordinates
	const parsePercent = (value: string | undefined): number => {
		if (!value) return 0;
		const num = parseFloat(value.replace("%", ""));
		return isNaN(num) ? 0 : num;
	};
	
	const rxValue = parsePercent(rx);
	const ryValue = parsePercent(ry);
	
	// Create path for rounded rectangle (using viewBox="0 0 100 100" for percentage-based calculations)
	const pathD = `M ${rxValue},0 L ${100 - rxValue},0 Q 100,0 100,${ryValue} L 100,${100 - ryValue} Q 100,100 ${100 - rxValue},100 L ${rxValue},100 Q 0,100 0,${100 - ryValue} L 0,${ryValue} Q 0,0 ${rxValue},0 Z`;

	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				className="absolute h-full w-full"
				width="100%"
				height="100%"
				viewBox="0 0 100 100"
				{...otherProps}
			>
				<path
					fill="none"
					d={pathD}
					ref={pathRef}
				/>
			</svg>
			<motion.div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "inline-block",
					transform,
				}}
			>
				{children}
			</motion.div>
		</>
	);
};
