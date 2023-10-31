/**
 * Title: Write a program using JavaScript on Container
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

const Container = ({ children, className, ...props }) => {
  return (
    <section
      {...props}
      className={"max-w-lg mx-auto px-4" + " " + (className ? className : "")}
    >
      {children}
    </section>
  );
};

export default Container;
