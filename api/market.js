export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      received: false,
      error: "Method Not Allowed",
    });
  }

  try {
    console.log("========== REQUEST ==========");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("Type:", typeof req.body);

    let market = req.body;

    // Jika body masih berupa string, parse manual
    if (typeof market === "string") {
      market = JSON.parse(market);
    }

    if (!market || !market.symbol) {
      return res.status(400).json({
        received: false,
        error: "Invalid JSON",
        body: market,
      });
    }

    console.log("========== MARKET ==========");
    console.log("Symbol:", market.symbol);
    console.log("Timeframe:", market.timeframe);
    console.log("Candles:", market.candles?.length || 0);

    return res.status(200).json({
      received: true,
      symbol: market.symbol,
      timeframe: market.timeframe,
      candles: market.candles?.length || 0,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      received: false,
      error: err.message,
      stack: err.stack,
    });
  }
}
