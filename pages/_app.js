import { Provider } from 'next-auth/client';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<Provider session={session}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
