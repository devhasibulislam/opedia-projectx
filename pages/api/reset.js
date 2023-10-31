import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("opedia-projectx");

  switch (req.method) {
    case "PUT":
      const bodyObject = req.body;
      const user = await db.collection("users").findOneAndUpdate(
        { email: bodyObject.email },
        {
          $set: {
            password: bodyObject.password,
            confirmPassword: bodyObject.confirmPassword,
          },
        }
      );

      res.status(200).json({ success: user.acknowledged, message: "OK!" });
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
