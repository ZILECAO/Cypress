import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Meta from '@/components/meta'
import '@/styles/globals.css'

import { VeChainProvider } from '@vechain.energy/use-vechain'

const App = ({ Component, pageProps }: AppProps) => {
	const [user, setUser] = useState({
		address: '0x9a3bD7887285F95B43D6BeD207ddE87d01CfB960',
		isAuthed: false,
		balance: [500, 46],
	})
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			<Meta />
			<VeChainProvider
				config={{
					node: 'https://testnet.vecha.in',
					network: 'test',
				}}
				options={{
					delegate: process.env.VEN_DELEGATE_URL,
					delegateTest: String(process.env.VEN_DELEGATE_URL).concat('/test'),
				}}
			>
				<Component {...pageProps} user={user} setUser={setUser} />
			</VeChainProvider>
		</ThemeProvider>
	)
}

export default App
