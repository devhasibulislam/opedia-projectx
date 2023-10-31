/**
 * Title: Write a program using JavaScript on Confirm
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

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Confirm = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Signup Confirmation</title>
      </Head>
      <style jsx>{`
        .main-container {
          width: 100%;
          background-color: #9b1c19;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .logo-container {
          width: 192px;
          height: 166px;
          margin-top: 40px;
        }

        .logo-img {
          width: 100%;
          height: 100%;
        }

        .title {
          text-align: center;
          color: white;
          font-size: 32px;
          font-weight: 600;
          word-wrap: break-word;
          margin-bottom: 29px;
        }

        .description {
          text-align: center;
          color: white;
          font-size: 24px;
          font-weight: 600;
          word-wrap: break-word;
        }

        .button-container {
          width: 212px;
          height: 42px;
          margin-top: 32px;
          background: #ff4700;
          border-radius: 18.77px;
          display: grid;
          place-items: center;
        }

        .confirm-button {
          display: grid;
          place-items: center;
          width: 183px;
          height: 39px;
          text-align: center;
          color: white;
          font-size: 16px;
          font-weight: 600;
          word-wrap: break-word;
          cursor: pointer;
        }
      `}</style>
      <div className="main-container">
        <div className="logo-container">
          <Image
            src="/logo.svg"
            alt="logo"
            width={212}
            height={185}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="title">Verify Your Email Address</div>
        <div className="description">
          Verifying your email address gives you access to more features on
          TalenGen.
          <br />
          Click the button below to join our community of Talents!
        </div>
        <div className="button-container">
          <div className="confirm-button">CONFIRM EMAIL</div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
