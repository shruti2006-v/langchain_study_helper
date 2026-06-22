export async function runQA(model: any, question: string) {
  const prompt = `
You are a helpful AI study assistant.

Answer clearly and simply.

Question: ${question}
`;

  const response = await model.invoke(prompt);
  return response;
}