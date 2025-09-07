let waitlist = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }
    waitlist.push(email);
    console.log("📩 New signup:", email);
    return res.status(200).json({ message: "Email added to waitlist" });
  }

  if (req.method === "GET") {
    return res.status(200).json({ waitlist });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
