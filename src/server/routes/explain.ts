import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const router = express.Router();

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

router.post('/api/explain', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    
    // Get the model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();
    
    res.json({ explanation });
  } catch (error) {
    console.error('Error generating explanation:', error);
    res.status(500).json({ 
      error: 'Failed to generate explanation',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router; 