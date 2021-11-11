import { useState } from 'react';
import recognizeText, { RecognizeTextProps } from './ocr';

export default function useRecognizeText() {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeTextProps | null>(null);
  const [scanActive, setScanActive] = useState<boolean>(false);

  const recognize = (imageURL: string) => {
    setScanActive(true);
    recognizeText(imageURL, setProgress)
      .then(setText)
      .then(() => setScanActive(false));
  };
  return { text, progress, recognize, scanActive };
}
