import React, { useState } from 'react'

import { useAccount, executeCalls } from '@vechain.energy/use-vechain'
import Section from '@/components/section'
import Page from '@/components/page'

import Home from './Home'

import Introduction from './Introduction'

export default function Landing(props) {
	let setUser = props.setUser
	let user = props.user

	const { connect } = useAccount()

	const handleConnect = async () => {
		let account = await connect()
		if (!account) return
		setUser({
			address: account.annex.signer,
			isAuthed: true,
			balance: [500, 46],
		})
	}

	return (
		<div>
			{user.isAuthed ? (
				<Home walletAddress={user.address} balance={user.balance} />
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
