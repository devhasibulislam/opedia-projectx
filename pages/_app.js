import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${poppins.className} h-screen w-screen overflow-x-hidden overflow-y-auto`}
    >
      <Component {...pageProps} />
    </main>
  );
}
