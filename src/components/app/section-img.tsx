import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Lottie from "lottie-react";
import lot from "./Animation - 1741764042283.json";
export function SectionImg() {
	return (
		<div className='h-[430px] md:h-screen relative'>
			<Lottie animationData={lot} className='absolute top-0 left-0 w-full h-full' />
			<img src={useBaseUrl("img/up-shadow.png")} alt='#' className='absolute top-0 z-10 right-0 left-0 w-full' />
			<img src={useBaseUrl("img/down.png")} alt='#' className='absolute bottom-0 right-0 left-0 w-full opacity-70 z-10' />
			{/* The section image now fills the container (h-full) and is pulled upward */}
			<img src={useBaseUrl("img/section-img.png")} alt='#' className='w-full' />
		</div>
	);
}
