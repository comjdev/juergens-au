"use client";

import React from "react";
import Marquee from "react-fast-marquee";

import { companies } from "@/data";

const Brands = () => {
	return (
		<section id="testimonials" className="py-20 w-full">
			<div className="max-w-7xl mx-auto px-5 sm:px-10">
				<h1 className="heading">
					Teams & Companies{" "}
					<span className="text-purple">I&apos;ve worked with</span>
				</h1>
			</div>

			<div className="w-full lg:mt-20">
				<Marquee speed={30} className="max-lg:mt-10">
					{companies.map((company) => (
						<div
							key={company.id}
							className="flex md:max-w-60 max-w-32 gap-2 mx-4 md:mx-8"
						>
							<img
								src={company.img}
								alt={company.name}
								className="h-5 md:h-8 lg:h-10 w-auto"
							/>
						</div>
					))}
				</Marquee>

				<Marquee
					speed={30}
					direction="right"
					pauseOnHover={true}
					className="lg:mt-20"
				>
					{companies.map((company) => (
						<div
							key={company.id}
							className="flex md:max-w-60 max-w-32 gap-2 mx-4 md:mx-8"
						>
							<img
								src={company.img}
								alt={company.name}
								className="h-5 md:h-8 lg:h-10 w-auto"
							/>
						</div>
					))}
				</Marquee>
			</div>
		</section>
	);
};

export default Brands;
