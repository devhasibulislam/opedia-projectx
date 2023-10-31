/**
 * Title: Write a program using JavaScript on Layout
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
import FormHeader from "./FormHeader";
import Container from "./Container";

const Layout = ({ children, className, ...props }) => {
  return (
    <section {...props} className={"" + " " + (className ? className : "")}>
      <Container className="flex flex-col gap-y-9">
        <FormHeader />
        {children}
      </Container>
    </section>
  );
};

export default Layout;
