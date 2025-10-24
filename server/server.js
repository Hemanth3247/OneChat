import 'dotenv/config';
import Cerebras from '@cerebras/cerebras_cloud_sdk';

const cerebras = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY,
});

async function main() {
  const response = await cerebras.chat.completions.create({
    model: "llama3.1-8b",
    messages: [{ 
      role: "user", content: "just give a p Hello! can u explain the smart contracts i etherium" }],
  });

  console.log(response.choices[0].message.content);
}

main();
