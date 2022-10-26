import "../styles/globals.css";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
