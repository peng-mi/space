import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp;