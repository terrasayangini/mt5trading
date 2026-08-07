export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  try {

    const market = req.body;

    const prompt = `
You are a trading assistant for XAUUSD.

Analyze this market data:

${JSON.stringify(market)}

Return ONLY valid JSON.
No explanation.

Format:

{
  "signal":"BUY or SELL or WAIT",
  "lot":0.01,
  "sl":0,
  "tp":0,
  "reason":"short reason"
}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0,
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      }
    );

    const ai = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(ai);
    }

    res.status(200).json({
      status: "success",
      market,
      ai: ai.choices[0].message.content
    });

  } catch (err) {

    res.status(500).json({
      status: "error",
      message: err.message
    });

  }

}
