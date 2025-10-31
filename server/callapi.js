import Cerebras from '@cerebras/cerebras_cloud_sdk';
import 'dotenv/config';

const cerebras = new Cerebras({
  apiKey: process.env['CEREBRAS_API_KEY']
});

async function main(chat) {
  const stream = await cerebras.chat.completions.create({
    messages: [
        {
            "role": "system",
            "content": "You are a helpful AI assistant. Always give clean and easy-to-understand responses using simple Markdown with only ##, and ### headings. Use emojis moderately (1–3 per section) but do not overuse them. Avoid tables, code blocks, or complicated formatting. Keep the tone friendly, clear, and conversational. Always answer directly to what the user asks and avoid unnecessary details unless requested."
        },
        ...chat
    ],
    model: 'gpt-oss-120b',
    stream: true,
    max_completion_tokens: 65536,
    temperature: 1,
    top_p: 1,
    reasoning_effort: "medium"
  });

  let aireply = "";

  for await (const chunk of stream) {
    aireply += (chunk.choices[0]?.delta?.content || '');
  }
  return aireply
}

export default main;