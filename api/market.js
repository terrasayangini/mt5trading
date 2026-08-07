export default function handler(req, res) {
  console.log("METHOD:", req.method);
  console.log("BODY:", req.body);

  return res.status(200).json({
    ok: true,
    method: req.method,
    bodyType: typeof req.body,
    body: req.body
  });
}
