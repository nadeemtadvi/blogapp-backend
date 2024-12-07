import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({ token: 'AKybtHiaI8Rvfcf8SRDTVI61TvBLFCmjq1bIbU0y' });

export const generateContent = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    console.log('Requesting Cohere API with prompt:', prompt);
    const response = await cohere.generate({
      model: 'command-r-08-2024',
      prompt: prompt,
      maxTokens: 300,
      temperature: 0.9,
      k: 0,
      stopSequences: [],
      returnLikelihoods: 'NONE',
    });
    console.log('Cohere Response:', response);
    res.json({ generatedText: response.generations[0].text });
  } catch (error) {
    console.error('Error generating content:', error.response?.data || error.message);
    res.status(500).json({ error: 'Error generating content' });
  }
};





