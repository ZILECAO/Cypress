import SocialPhoto from './img/Social.png'
import BottomNav from '../components/bottom-nav'

import Image from 'next/image'

const Social = () => {
	return (
		// write a dive that uses the page number to display the correct image, add tailwind css to make the image fill the entire scr
		<div>
			<Image src={SocialPhoto} className='h-full w-full' />
			<BottomNav />
		</div>
	)
}

export default Social
