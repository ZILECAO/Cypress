import IntegrationPhoto from './img/Integration.png'

import Image from 'next/image'

const Integration = () => {
	return (
		// write a dive that uses the page number to display the correct image, add tailwind css to make the image fill the entire scr
		<div>
			<Image src={IntegrationPhoto} className='h-full w-full' />
		</div>
	)
}

export default Integration
