export default function handler(req, res) {
  return res.status(200).json({
    method: req.method,
    headers: req.headers,
    bodyType: typeof req.body,
    body: req.body
  });
}
