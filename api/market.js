export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  try {

    const market = req.body;

    console.log("Market Received:", market);

    return res.status(200).json({
      received: true,
      symbol: market.symbol,
      timeframe: market.timeframe,
      candles: market.candles ? market.candles.length : 0
    });

  } catch (err) {

    return res.status(500).json({
      received: false,
      error: err.message
    });

  }

}
