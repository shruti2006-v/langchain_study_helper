import dotenv from "dotenv";
dotenv.config();

import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
});

async function main() {
  try {
    console.log("Starting...");

    const response = await model.invoke("What is AI?");
    console.log(response.content);
  } catch (error) {
    console.error(error);
  }
}

main();