export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  return res.status(200).json({
    status: "received",
    message: "MT5 connected successfully"
  });

}

