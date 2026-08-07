export default function handler(req, res) {
  console.log("===== RAW REQUEST =====");

  return res.status(200).json({
    method: req.method,
    headers: req.headers,
    bodyType: typeof req.body,
    body: req.body
  });
}
