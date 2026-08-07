export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  console.log(req.body);

  res.status(200).json({
    status: "MT5 received",
    data: req.body
  });

}
