/**
 * Title: Write a program using JavaScript on Employer
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

const Employer = () => {
  return (
    <Layout>
      <form
        className="flex flex-col gap-y-2"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/signin");
        }}
      >
        <h2 className="text-2xl font-medium">Students & Alumni</h2>

        {/* Enter Name */}
        <label htmlFor="name" className="flex flex-col gap-y-1.5">
          <p className="">Enter your preferred name*</p>
          <input
            type="text"
            name="name"
            id="name"
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

        {/* Enter Institution */}
        <label htmlFor="institutin" className="flex flex-col gap-y-1.5">
          <p className="">Current/Past Institution*</p>
          <select
            name="institution"
            id="institution"
            defaultValue="default"
            className="form-select bg-transparent text-[#FFFFFF66] text-sm w-full border-2 border-white outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white"
          >
            <option value="default" disabled>
              Select University
            </option>
            {universities.map((university) => (
              <option
                key={university}
                value={university}
                className="text-black"
              >
                {university}
              </option>
            ))}
          </select>
        </label>

        {/* Enter Graduation */}
        <label htmlFor="institution" className="flex flex-col gap-y-1.5">
          <p className="">Graduation Class*</p>
          <select
            name="institution"
            id="institution"
            defaultValue="default"
            className="form-select bg-transparent text-[#FFFFFF66] text-sm w-full border-2 border-white outline-none ring-0 focus:outline-none focus:ring-0 focus:border-2 focus:border-white"
          >
            <option value="default" disabled>
              Select Graduation Year
            </option>
            {years.map((year) => (
              <option key={year} value={year} className="text-black">
                {year}
              </option>
            ))}
          </select>
        </label>

        {/* Submit Button */}
        <div className="flex md:flex-row flex-col items-center justify-between">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </Layout>
  );
};

export default Employer;
