import { useState } from 'react'

import Intro1 from './img/Intro1.png'
import Intro2 from './img/Intro2.png'
import Intro3 from './img/Intro3.png'

import Image from 'next/image'

const Introduction = (props) => {
	const [page, setPage] = useState(1)
	const handleNext = () => {
		if (page == 3) {
			setPage(3)
		} else {
			setPage(page + 1)
		}
	}
	return (
		// write a dive that uses the page number to display the correct image, add tailwind css to make the image fill the entire scr
		<div>
			{page == 1 ? (
				<Image src={Intro1} className='h-full w-full' onClick={handleNext} />
			) : page == 2 ? (
				<Image src={Intro2} className='h-full w-full' onClick={handleNext} />
			) : page == 3 ? (
				<div className='flex justify-center'>
					<button
						type='button'
						onClick={props.handleConnect}
						// make button floating in the bottom center
						className='w-500 fixed right-[20%] bottom-20 z-[100] h-10 rounded-lg bg-green-700 px-16 py-0 text-white '
					>
						Connect Wallet
					</button>

					<Image
						src={Intro3}
						className='z-[-1] h-full w-full '
						onClick={handleNext}
					/>
				</div>
			) : (
				<Image src={Intro1} className='h-full w-full' onClick={handleNext} />
			)}
		</div>
	)
}

export default Introduction
