import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export default async function handler(req, res) {
  const { text, lang = 'spanish' } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: `Translate this to ${lang} using local slang:\n\n${text}`
      }],
    });
    
    res.status(200).json(completion.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: "Translation failed" });
  }
}