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

export default function Home() {
  return (
    <>
      <Layout className="">
        {/* Signup Form */}
        <div className="flex flex-col gap-y-6">
          <Part01 />
          <hr />
          <Part02 />
        </div>
      </Layout>
    </>
  );
}
