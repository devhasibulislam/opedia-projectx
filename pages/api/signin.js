import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("opedia-projectx");

  switch (req.method) {
    case "POST":
      const bodyObject = req.body;
      const user = await db
        .collection("users")
        .find({ email: bodyObject.email });

      res.status(200).json({ success: user.acknowledged, message: "OK!" });
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
