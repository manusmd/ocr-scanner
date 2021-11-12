import { useState } from 'react';

export default function usePostDocument() {
  const [saveDisabled, setSaveDisabled] = useState(false);
  const postDocument = async (document: {
    title: string;
    text: string;
    image: File;
  }) => {
    /*     const formData = new FormData();
    formData.append(document.text, document.title, document.image) */
    console.log(document);
    await fetch('http://localhost:1337/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
    setSaveDisabled(true);
  };
  return { saveDisabled, postDocument };
}
