/**
 * Title: Write a program using JavaScript on Confirm Password
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

import Button from "@/components/Button";
import Head from "next/head";
import React from "react";

const ConfirmPassword = () => {
  return (
    <section className="h-screen w-full flex flex-row justify-center items-center">
      <Head>
        <title>Confirm Your Password</title>
      </Head>
      <form
        className="max-w-3xl mx-auto px-4 flex flex-col gap-y-2"
        onSubmit={(event) => {
          event.preventDefault();
          router.push(`/signup/${category}`);
        }}
      >
        <article className="flex flex-col gap-y-7">
          <h2 className="text-2xl font-semibold text-center">
            Reset Your Password
          </h2>
          <p className="font-medium text-center text-base">
            Enter a new password for account: example@gmail.com
          </p>
        </article>

        {/* Enter Password */}
        <label htmlFor="password" className="flex flex-col gap-y-1.5">
          <p className="">Password*</p>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Confirm Password */}
        <label htmlFor="confirmPassword" className="flex flex-col gap-y-1.5">
          <p className="">Confirm Password*</p>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Submit Button */}
        <div className="flex md:flex-row flex-col items-center justify-center">
          <Button type="submit">Reset Password</Button>
        </div>
      </form>
    </section>
  );
};

export default ConfirmPassword;
