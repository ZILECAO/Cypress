import MarketPhoto from './img/Marketplace.png'
import BottomNav from '../components/bottom-nav'

import Image from 'next/image'

const Market = () => {
	return (
		// write a dive that uses the page number to display the correct image, add tailwind css to make the image fill the entire scr
		<div>
			<Image src={MarketPhoto} className='h-full w-full' />
			<BottomNav />
		</div>
	)
}

export default Market
