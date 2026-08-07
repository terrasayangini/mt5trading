export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    market: {
      symbol: "EURUSD",
      timeframe: "M30",
      price: 1.15221,
      time: "2026-08-07 09:35"
    }
  });
}
