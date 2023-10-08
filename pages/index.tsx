import React, { useState } from 'react'

import { useAccount } from '@vechain.energy/use-vechain'
import Section from '@/components/section'
import Page from '@/components/page'

import Home from './Home'

export default function Landing() {
	const [user, setUser] = useState({
		address: '',
		balance: 0,
		isAuthed: false,
	})
	const { connect } = useAccount()

	const handleConnect = async () => {
		connect()
	}

	return (
		<div>
			{user.isAuthed ? (
				<Home />
			) : (
				<Page>
					<Section>
						<h2 className='flex justify-center text-xl font-semibold'>
							Travel Sustainably
						</h2>

						<div className='mt-2'>
							<p className='text-zinc-600 dark:text-zinc-400'>
								Choose green transportation options such as the MBTA, Bluebikes,
								and Uber Carpool.
							</p>
						</div>
					</Section>

					<Section>
						<div className='flex justify-center'>
							<button
								onClick={handleConnect}
								className='rounded-lg bg-green-500 py-2 px-4'
							>
								Connect
							</button>
						</div>
					</Section>
				</Page>
			)}
		</div>
	)
}
