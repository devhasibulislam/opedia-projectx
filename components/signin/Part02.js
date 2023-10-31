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

import React from "react";
import Button from "../Button";
import Link from "next/link";

const Part02 = () => {
  function handleEmployerOrCounselorSignin(event) {
    event.preventDefault();

    const userInformation = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInformation),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  return (
    <form
      className="flex flex-col gap-y-2"
      onSubmit={handleEmployerOrCounselorSignin}
    >
      <h2 className="text-2xl font-medium">Employer & University Counselor </h2>

      {/* Enter Email */}
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

      {/* Submit Button */}
      <div className="flex md:flex-row flex-col items-center justify-between">
        <Button type="submit">Sign In</Button>
        <p className="font-medium">
          <Link href="/forgot-password">Forgot password</Link>
        </p>
      </div>
    </form>
  );
};

export default Part02;
