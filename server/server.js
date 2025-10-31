import express from "express";
import cors from "cors";
import main from './callapi.js';

const PORT = 3000;
const app = new express();
app.use(cors());
app.use(express.json());

app.post("/chat",async (req,res) =>{
  const chat = req.body;
  const reply = await main(chat);
  res.send(reply);
})

app.listen(PORT, () => {
  console.log("Server Initiated");
});