export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  const data = req.body;

  console.log("DATA DARI MT5:", data);

  return res.status(200).json({
    status: "received",
    data: data
  });
}
