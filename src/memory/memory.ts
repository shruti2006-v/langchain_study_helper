export let chatHistory: string[] = [];

export function addToMemory(message: string) {
  chatHistory.push(message);
}