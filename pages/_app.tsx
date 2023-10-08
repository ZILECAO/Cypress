import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Meta from '@/components/meta'
import '@/styles/globals.css'

import { VeChainProvider } from '@vechain.energy/use-vechain'

const App = ({ Component, pageProps }: AppProps) => {
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
				<Component {...pageProps} />
			</VeChainProvider>
		</ThemeProvider>
	)
}

export default App
