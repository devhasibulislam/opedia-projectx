/**
 * Title: Write a program using JavaScript on Button
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

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={"bg-[#FF4700] py-2 px-8 rounded-full text-sm whitespace-nowrap" + " " + (className ? className : "")}
    >
      {children}
    </button>
  );
};

export default Button;
