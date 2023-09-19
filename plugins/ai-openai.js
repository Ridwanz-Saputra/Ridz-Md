import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`;
  const apiKey = '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'; // Ganti dengan kunci API OpenAI Anda yang sebenarnya
  const openaiEndpoint = 'https://api.openai.com/v1/engines/davinci-003/completions'; // Sesuaikan dengan endpoint OpenAI GPT-3.5 yang sesuai
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const requestBody = JSON.stringify({
    prompt: text,
    max_tokens: 50, // Sesuaikan sesuai kebutuhan Anda
  });

  let res = await fetch(openaiEndpoint, {
    method: 'POST',
    headers: headers,
    body: requestBody,
  });

  let result = await res.json();

  if (result && result.choices && result.choices[0] && result.choices[0].text) {
    m.reply(result.choices[0].text);
  } else {
    m.reply('Tidak ada jawaban yang ditemukan dari OpenAI GPT-3.5.');
  }
};

handler.command = /^(uy|ay)$/i;
handler.limit = true;
export default handler;