import React, { useState } from 'react'

import { useAccount, executeCalls } from '@vechain.energy/use-vechain'
import Section from '@/components/section'
import Page from '@/components/page'

import Home from './Home'

import Introduction from './Introduction'

export default function Landing() {
	const [user, setUser] = useState({
		address: '0x9a3bD7887285F95B43D6BeD207ddE87d01CfB960',
		isAuthed: false,
	})
	const { connect } = useAccount()

	const handleConnect = async () => {
		let account = await connect()
		if (!account) return
		setUser({
			address: account.annex.signer,
			isAuthed: true,
		})
	}

	return (
		<div>
			{!user.isAuthed ? (
				<Home walletAddress={user.address} />
			) : (
				// <Page>
				// 	<Section>
				// 		<h2 className='flex justify-center text-xl font-semibold'>
				// 			Travel Sustainably
				// 		</h2>

				// 		<div className='mt-2'>
				// 			<p className='text-zinc-600 dark:text-zinc-400'>
				// 				Choose green transportation options such as the MBTA, Bluebikes,
				// 				and Uber Carpool.
				// 			</p>
				// 		</div>
				// 	</Section>

				// 	<Section>
				// 		<div className='flex justify-center'>
				// 			<button
				// 				onClick={handleConnect}
				// 				className='rounded-lg bg-green-500 py-2 px-4'
				// 			>
				// 				Connect
				// 			</button>
				// 		</div>
				// 	</Section>
				// </Page>
				<Introduction handleConnect={handleConnect} />
			)}
		</div>
	)
}
