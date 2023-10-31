/**
 * Title: Write a program using JavaScript on Part01
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

import React, { useContext } from "react";
import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "@/pages/_app";

const Part01 = () => {
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  return (
    <form
      className="flex flex-col gap-y-2"
      onSubmit={(event) => {
        event.preventDefault();
        setUser({ email: event.target.email.value });
        router.push("/signup/student-alumni");
      }}
    >
      <h2 className="text-2xl font-medium">Students & Alumni</h2>

      <label htmlFor="email" className="flex flex-col gap-y-1.5">
        <p className="">Enter your student email to sign up*</p>
        <input
          type="email"
          name="email"
          id="email1"
          placeholder="example@um.edu"
          className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
        />
      </label>

      <div className="flex md:flex-row flex-col items-center justify-between">
        <Button type="submit">Sign Up</Button>
        <p className="font-medium">
          Already have an account? <Link href="/signin">Sign in</Link>
        </p>
      </div>
    </form>
  );
};

export default Part01;
