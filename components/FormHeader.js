/**
 * Title: Write a program using JavaScript on FormHeader
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

import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const FormHeader = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-4">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={105}
        height={100}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />

      <article className="flex flex-col items-center gap-y-2.5">
        <h1 className="text-4xl font-semibold text-center">
          Take your First Step
        </h1>
        <p className="text-2xl font-medium text-center">Join TalenGen Now</p>
      </article>
    </section>
  );
};

export default FormHeader;
