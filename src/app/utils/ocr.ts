import Tesseract from 'tesseract.js';

export type RecognizeTextProps = {
  progress: number;
  status: string;
};

export default async function recognizeText(
  imageURL: string,
  onMessage: ({ status, progress }: RecognizeTextProps) => void
) {
  const result = await Tesseract.recognize(imageURL, 'eng', {
    logger: (message) => {
      onMessage(message);
    },
  });
  return result.data.text;
}
