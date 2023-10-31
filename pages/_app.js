import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { createContext, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const UserContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({});
  const userInformation = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={userInformation}>
      <main
        className={`${poppins.className} h-screen w-screen overflow-x-hidden overflow-y-auto`}
      >
        <Component {...pageProps} />
      </main>
    </UserContext.Provider>
  );
}
