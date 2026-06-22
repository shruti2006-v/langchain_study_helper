import { searchNotes } from "../tools/notesTool";

export async function studyAgent(input: string, model: any) {
  if (
    input.toLowerCase().includes("langchain") ||
    input.toLowerCase().includes("langsmith")
  ) {
    const notes = searchNotes(input);

    const prompt = `
Use these notes to answer.

Notes:
${notes}

Question:
${input}
`;

    return await model.invoke(prompt);
  }

  return await model.invoke(input);
}