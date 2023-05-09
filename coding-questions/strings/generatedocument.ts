export function generateDocument(characters: string, document: string) {
  // Write your code here.
  // Write your code here.
  const documentHzMap: Record<string, number> = {};
  const charactersHzMap: Record<string, number> = {};

  if (document.length === 0) return true;

  for (let i of document) {
    documentHzMap[i] = documentHzMap[i] ? documentHzMap[i] + 1 : 1;
  }
  for (let i of characters) {
    charactersHzMap[i] = charactersHzMap[i] ? charactersHzMap[i] + 1 : 1;
  }

  for (let char of Object.keys(documentHzMap)) {
    if (charactersHzMap[char] && charactersHzMap[char] >= documentHzMap[char]) continue;
    return false;
  }

  return true;
}

export function generateDocument2(characters: string, document: string) {
  // Write your code here.
  const charactersHzMap: Record<string, number> = {};

  if (document.length === 0) return true;

  for (let i of characters) {
    charactersHzMap[i] = charactersHzMap[i] ? charactersHzMap[i] + 1 : 1;
  }

  for (let char of document) {
    if (!charactersHzMap[char] || charactersHzMap[char] === 0) return false;
    charactersHzMap[char] = charactersHzMap[char] - 1;
  }

  return true;
}

// const CHARACTERS = 'Bste!hetsi ogEAxpelrt x ';
// const DOCUMENT = 'AlgoExpert is the Best!';
const CHARACTERS = 'A';
const DOCUMENT = 'a';

const result = generateDocument2(CHARACTERS, DOCUMENT);
console.log(result);
