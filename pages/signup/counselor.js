/**
 * Title: Write a program using JavaScript on Counselor
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
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { UserContext } from "../_app";

const Counselor = () => {
  const router = useRouter();

  const { user } = useContext(UserContext);
  function handleCounselorSignup(event) {
    event.preventDefault();

    const userInformation = {
      name: event.target.name.value,
      company: event.target.company.value,
      designation: event.target.designation.value,
      contact: event.target.contact.value,
      registration: event.target.registration.value,
      email: user?.email,
      password: user?.password,
      confirmPassword: user?.confirmPassword,
      category: user?.category,
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/signup`, {
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

    router.push("/signup/confirm");
  }

  return (
    <Layout>
      <Head>
        <title>Sign Up by Counselor Account</title>
      </Head>
      <form className="flex flex-col gap-y-2" onSubmit={handleCounselorSignup}>
        <h2 className="text-2xl font-medium">University Counselor</h2>

        {/* Enter Name */}
        <label htmlFor="name" className="flex flex-col gap-y-1.5">
          <p className="">Enter your preferred name*</p>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Company Name */}
        <label htmlFor="company" className="flex flex-col gap-y-1.5">
          <p className="">Enter your company name*</p>
          <input
            type="text"
            name="company"
            id="company"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Designation */}
        <label htmlFor="designation" className="flex flex-col gap-y-1.5">
          <p className="">Enter your position name*</p>
          <input
            type="text"
            name="designation"
            id="designation"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Contact Number */}
        <label htmlFor="contact" className="flex flex-col gap-y-1.5">
          <p className="">Enter your preferred contact number*</p>
          <input
            type="tel"
            name="contact"
            id="contact"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Registration Number */}
        <label htmlFor="registration" className="flex flex-col gap-y-1.5">
          <p className="">Enter your registration number*</p>
          <input
            type="text"
            name="registration"
            id="registration"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Submit Button */}
        <div className="flex md:flex-row flex-col items-center justify-between">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </Layout>
  );
};

export default Counselor;
