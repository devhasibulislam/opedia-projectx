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

import Button from "@/components/Button";
import React from "react";

const ResetPassword = () => {
  return (
    <section className="h-screen w-full flex flex-row justify-center items-center">
      <section className="max-w-3xl mx-auto px-4 flex flex-col gap-y-8">
        <article className="flex flex-col gap-y-7">
          <h2 className="text-2xl font-semibold text-center">
            Reset Your Password
          </h2>
          <p className="font-medium text-center text-base">
            Please provide the email address that you used when you signed up
            for your account. If you forgot your email, please <u>contact us</u>
            .
          </p>
        </article>

        <div className="flex flex-col gap-y-8">
          <label htmlFor="email" className="flex flex-col gap-y-1.5">
            <p className="text-base">Enter your student email to sign up*</p>
            <input
              type="email"
              name="email"
              id="email1"
              placeholder="example@um.edu"
              className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66] text-base"
            />
          </label>

          <div className="flex flex-col gap-y-8 text-center">
            <p className="text-base">
              We will send you an email that will allow you to reset your
              password.
            </p>
            <Button type="submit" className="w-fit mx-auto text-base">
              Reset Password
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ResetPassword;
