import { Provider } from "next-auth/client";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
