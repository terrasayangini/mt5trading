export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: "Reply with exactly: Groq Connected Successfully!"
          }
        ],
        temperature: 0
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.status(200).json({
      status: "online",
      groq: "CONNECTED ✅",
      ai: data.choices[0].message.content
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
}
