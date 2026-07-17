import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/chat", async (req, res) => {
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
          "HTTP-Referer": "https://ais-dev-server.run.app",
          "X-Title": "Skill Bridge AI Chatbot"
        },
        body: JSON.stringify({
          model: process.env.OPENROUTER_MODEL || process.env.MODEL_NAME || process.env.MODEL || "z-ai/glm-4.5-air:free",
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
        console.error("OpenRouter Error Details:", data);
        return res.status(response.status).json({ 
          error: data.error?.message || "OpenRouter API returned an error.",
          details: data
        });
      }

      res.json(data);
    } catch (error) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: "Failed to connect to OpenRouter server. Please check your internet connection and API key." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
