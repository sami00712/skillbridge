import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "OPENROUTER_API_KEY not configured in environment." });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://skill-bridge-academy.vercel.app",
        "X-Title": "Skill Bridge AI Chatbot"
      },
      body: JSON.stringify({
        model: "z-ai/glm-4.5-air:free",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI Assistant for the 'Skill Bridge Academy' course. The course creator is Muhammad Sami QaimKhani (AI Engineer). The course focuses on HTML, TypeScript, Next.js, Python, and AI Agents. You should answer questions specifically about this course, its modules (HTML Basics, TypeScript Mastery, Python & AI, etc.), and technical topics related to the syllabus. Keep answers concise and friendly."
          },
          ...messages
        ]
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        error: data.error?.message || "OpenRouter API returned an error.",
        details: data
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("Chat Error:", error);
    return res.status(500).json({ error: "Failed to connect to OpenRouter server." });
  }
}
