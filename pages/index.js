/**
 * Title: Write a program using JavaScript on Index
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 31, October 2023
 */

import Layout from "@/components/Layout";
import Part01 from "@/components/signup/Part01";
import Part02 from "@/components/signup/Part02";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} h-screen w-screen overflow-x-hidden`}>
      <Layout className="">
        {/* Signup Form */}
        <div className="flex flex-col gap-y-6">
          <Part01 />
          <hr />
          <Part02 />
        </div>
      </Layout>
    </main>
  );
}
