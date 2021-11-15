import { useState } from 'react';

export default function usePostDocument() {
  const [saveDisabled, setSaveDisabled] = useState(false);
  const postDocument = async (document: { title: string; text: string }) => {
    await fetch('http://server.manu-web.de:1337/documents', {
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
