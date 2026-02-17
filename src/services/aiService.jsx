import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export async function generateComponent(prompt, framework) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
You are an experienced programmer with expertise in web development and UI/UX design. 
You create modern, animated, and fully responsive UI components. You are highly skilled 
in HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React, Next.js, Vue.js, Angular, and more.

Now, generate a UI component for: ${prompt}  
Framework to use: ${framework}  

Requirements:  
- The code must be clean, well-structured, and easy to understand.  
- Optimize for SEO where applicable.  
- Focus on creating a modern, animated, and responsive UI design.  
- Include high-quality hover effects, shadows, animations, colors, and typography.  
- Return ONLY the code, formatted properly in Markdown fenced code blocks.  
- Do NOT include explanations, text, comments, or anything else besides the code.  
- Give the entire code in a single HTML file.
`
  });

  return response.text;
}