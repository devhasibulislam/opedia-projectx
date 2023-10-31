/**
 * Title: Write a program using JavaScript on Part02
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

import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";
import { useRouter } from "next/router";

const Part02 = () => {
  const router = useRouter();
  const [category, setCategory] = useState("");

  return (
    <form
      className="flex flex-col gap-y-2"
      onSubmit={(event) => {
        event.preventDefault();
        router.push(`/signup/${category}`);
      }}
    >
      <h2 className="text-2xl font-medium">
        Employers & University Counselors
      </h2>

      {/* Enter Email */}
      <label htmlFor="email" className="flex flex-col gap-y-1.5">
        <p className="">Enter your student email to sign up*</p>
        <input
          type="email"
          name="email"
          id="email2"
          placeholder="example@um.edu"
          className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
        />
      </label>

      {/* Enter Category */}
      <label htmlFor="category" className="flex flex-col gap-y-1.5">
        <p className="">Please choose your category*</p>
        <select
          name="category"
          id="category"
          defaultValue="default"
          className="form-select bg-transparent text-[#FFFFFF66] text-sm w-full border-2 border-white outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="default" disabled>
            Select Category
          </option>
          <option value="employer" className="text-black">
            Employer
          </option>
          <option value="counselors" className="text-black">
            University Counselors
          </option>
        </select>
      </label>

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
      <div className="flex md:flex-row flex-col items-center justify-between">
        <Button type="submit">Sign Up</Button>
        <p className="font-medium">
          Already have an account? <Link href="/signin">Sign in</Link>
        </p>
      </div>
    </form>
  );
};

export default Part02;
