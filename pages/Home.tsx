import React, { useState, useEffect } from 'react'

import HomepagePhoto from './img/Homepage.png'

import * as Vechain from '@vechain.energy/use-vechain'
import Section from '@/components/section'
import Page from '@/components/page'
import { Button } from 'antd'

import Image from 'next/image'
import BottomNav from '@/components/bottom-nav'

function Home(props) {
	const data = props
	const [balance, setBallance] = useState([100, 100])
	const { vet, vtho } = Vechain.useBallance(data.walletAddress)
	useEffect(() => {
		const fetchBalance = async () => {
			setBallance([vet, vtho])
		}
		fetchBalance()
	})

	// Destructure props directly, if needed
	const contractAddress = '0xb7029C6886989423d87bb6F2B6ebAc91E5B2ffa8'
	const methodAbi = {
		inputs: [
			{
				internalType: 'uint256',
				name: 'plantId',
				type: 'uint256',
			},
		],
		name: 'getPlantDetails',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	}
	const args = [0]
	// Define ButtonHandle as a function inside your component
	return (
		<div>
			<Image src={HomepagePhoto} className='z-[-1] h-full w-full' alt='' />
			<button
				type='button'
				className='fixed right-[2%] top-[50%] z-[100] h-[80px] w-[80px] rounded-lg bg-transparent p-2'
				onClick={() => {
					window.location.href = '/Market'
				}}
			></button>
			<p className='fixed left-[9%] top-[24%] z-[100] h-10 w-10 rounded-lg p-2 text-xs font-bold text-green-500'>
				{data.walletAddress}
			</p>
			<p className='fixed left-[9%] top-[28%] z-[100] h-10 w-10 rounded-lg p-2 text-xs font-bold text-green-500'>
				$VET: {balance[0]}
			</p>
			<p className='fixed left-[9%] top-[30%] z-[100] h-10 w-10 rounded-lg p-2 text-xs font-bold text-green-500'>
				$VTHO: {balance[1]}
			</p>
			{/* <Link
				href='/Social'
				// make button floating in the bottom center
				className='w-500 fixed right-[10%] bottom-20 z-[100] h-10 rounded-lg bg-green-700 p-2 text-white '
			>
				Mak
			</Link> */}
			<BottomNav />
		</div>
	)
}

export default Home
