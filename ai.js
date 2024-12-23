export function initAI() {
  const form = document.getElementById('ai-form');
  // Only initialize if we're on the AI page
  if (!form) return;

  const output = document.getElementById('ai-output');
  const loading = document.getElementById('loading');
  const API_KEY = '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';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const prompt = document.getElementById('ai-prompt').value;
    
    try {
      loading.style.display = 'block';
      output.textContent = '';
      
      const response = await fetch('https://api.groq.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
          model: "llama3-8b-8192",
          temperature: 1,
          max_tokens: 1024,
          top_p: 1,
          stream: false
        })
      });

      const data = await response.json();
      output.textContent = data.choices[0].message.content;
    } catch (error) {
      output.textContent = 'Error: Could not generate response. Please try again.';
      console.error('Error:', error);
    } finally {
      loading.style.display = 'none';
    }
  });
}