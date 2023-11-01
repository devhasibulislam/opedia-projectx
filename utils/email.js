import { createTransport } from "nodemailer";

function sendEmail(user, url, subject) {
  const transporter = createTransport({
    service: process.env.APP_SERVICE,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_EMAIL,
    to: user?.email,
    subject: `TalenGen - ${subject}`,
    html: `
    <div
    class="verify-email-container"
    style="
      width: 100%;
      background-color: #9b1c19;
      justify-content: center;
      align-items: center;
    "
  >
    <div
      style="
        text-align: center;
        color: white;
        font-size: 24px;
        font-family: Poppins;
        font-weight: 600;
        word-wrap: break-word;
        margin-bottom: 32px;
      "
    >
      Verify Your Email Address
    </div>
    <div
      style="
        text-align: center;
        color: white;
        font-size: 16px;
        font-family: Poppins;
        font-weight: 400;
        word-wrap: break-word;
      "
    >
      You will need to verify your email address to complete registration
    </div>
    <div
      style="
        width: 100%;
        height: 185px;
        margin-top: 40px;
        margin-bottom: 21px;
        text-align: center;
      "
    >
      <img
        style="max-width: 100%; height: 100%; margin: 0 auto"
        src="https://github.com/devhasibulislam/opedia-projectx/blob/master/public/logo.png?raw=true"
      />
    </div>
    <div
      style="width: 100%; text-align: center; color: white; word-wrap: break-word"
    >
      An email has been sent to example@gmail.com with a link to verify your
      account. <br />If you have not received the email after a few minutes,
      please check your spam folder.
    </div>
    <div
      style="
        width: 100%;
        height: 39px;
        margin-top: 41px;
        display: flex;
        justify-content: center;
      "
    >
      <a
        href="${url}"
        style="
          display: grid;
          place-items: center;
          width: fit-content;
          height: 100%;
          text-align: center;
          color: white;
          font-size: 16px;
          font-family: Poppins;
          font-weight: 600;
          word-wrap: break-word;
          text-decoration: none;
          background: #ff4700;
          border-radius: 100px;
          padding: 5px 10px;
        "
      >
        RESEND VERIFICATION EMAIL
      </a>
    </div>
  </div>  
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent to: " + info.envelope.to[0]);
    }
  });
}

export default sendEmail;
