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
import React from "react";

const counselor = () => {
  return (
    <Layout>
      <form
        className="flex flex-col gap-y-2"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/signin");
        }}
      >
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
        <label htmlFor="name" className="flex flex-col gap-y-1.5">
          <p className="">Enter your company name*</p>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Designation */}
        <label htmlFor="name" className="flex flex-col gap-y-1.5">
          <p className="">Enter your position name*</p>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Contact Number */}
        <label htmlFor="name" className="flex flex-col gap-y-1.5">
          <p className="">Enter your preferred contact number*</p>
          <input
            type="tel"
            name="name"
            id="name"
            className="form-input w-full border-2 border-white bg-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white text-[#FFFFFF66] placeholder:text-[#FFFFFF66]"
          />
        </label>

        {/* Enter Registration Number */}
        <label htmlFor="name" className="flex flex-col gap-y-1.5">
          <p className="">Enter your registration number*</p>
          <input
            type="text"
            name="name"
            id="name"
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

export default counselor;
