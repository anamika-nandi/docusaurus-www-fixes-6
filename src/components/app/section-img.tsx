import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Lottie from "lottie-react";
import lot from "./Hero_Animation 2 (1).json";
export function SectionImg() {
	return (
		<div className='h-[370px] 2xl:h-screen relative w-full'>
			<BrowserOnly>{() => <Lottie animationData={lot} className='absolute top-0 left-0 w-full h-full md:h-auto md:w-auto' />}</BrowserOnly>
			<img src={useBaseUrl("img/up-shadow.png")} alt='#' className='absolute h-[300px] md:h-auto top-0 z-10 right-0 left-0 w-full ' />
			<img src={useBaseUrl("img/down.png")} alt='#' className='absolute md:-bottom-4  h-[300px] md:h-auto bottom-0 right-0 left-0 w-full opacity-70 z-10' />
			{/* The section image now fills the container (h-full) and is pulled upward */}
			{/* <img src={useBaseUrl("img/section-img.png")} alt='#' className='w-full' /> */}
		</div>
	);
}
