import clientPromise from "@/lib/mongodb";
import sendEmail from "@/utils/email";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("opedia-projectx");

  switch (req.method) {
    case "POST":
      const bodyObject = req.body;
      const user = await db.collection("users").insertOne(bodyObject);

      sendEmail(
        {
          email: bodyObject.email,
          name: bodyObject.name,
        },
        "https://opedia-projectx.vercel.app/",
        "Confirm Your Email"
      );

      res.status(201).json({ success: user.acknowledged, message: "Created!" });
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
