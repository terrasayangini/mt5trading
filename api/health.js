export default function handler(req, res) {

  const groq = process.env.GROQ_API_KEY;

  res.status(200).json({
    status: "online",
    groq: groq ? "CONNECTED ✅" : "NOT FOUND ❌"
  });

}
