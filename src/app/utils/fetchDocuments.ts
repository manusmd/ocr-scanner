export default async function fetchDocuments(url: string) {
  const response = await fetch(url);
  const body = await response.json();
  return body;
}
