/**
 * Title: Write a program using JavaScript on Signin
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
import Part01 from "@/components/signin/Part01";
import Part02 from "@/components/signin/Part02";
import Head from "next/head";
import React from "react";

const signin = () => {
  return (
    <Layout className="">
      <Head>
        <title>Sign In Your Account</title>
      </Head>
      {/* Signin Form */}
      <div className="flex flex-col gap-y-6">
        <Part01 />
        <hr />
        <Part02 />
      </div>
    </Layout>
  );
};

export default signin;
