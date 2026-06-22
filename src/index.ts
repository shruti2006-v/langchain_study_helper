import dotenv from "dotenv";
dotenv.config();

import { ChatGroq } from "@langchain/groq";
import { runQA } from "./chains/qaChain";
import { studyAgent } from "./agents/studyAgent";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
});

async function main() {
  try {
    console.log("---- CHAIN EXAMPLE ----");

    const chainResponse = await runQA(
      model,
      "What is Artificial Intelligence?"
    );

    console.log(chainResponse.content);

    console.log("\n---- AGENT EXAMPLE ----");

    const agentResponse = await studyAgent(
      "What is LangChain?",
      model
    );

    console.log(agentResponse.content);
  } catch (error) {
    console.error(error);
  }
}

main();