import React, { useEffect, useState } from 'react';
import styles from './Documents.module.css';
import fetchDocuments from '../../utils/fetchDocuments';
import AddDocumentCard, {
  addDocumentCardProps,
} from '../../components/DocumentCard/DocumentCard';

export default function Documents(): JSX.Element {
  const [documents, setDocuments] = useState<addDocumentCardProps[]>([]);

  useEffect(() => {
    async function fetch() {
      const newDocuments = await fetchDocuments(
        'http://localhost:1337/documents'
      );
      console.log(newDocuments);
      setDocuments(newDocuments);
    }
    fetch();
  }, []);

  console.log(documents);

  return (
    <>
      <h1 className={styles.title}>All Documents</h1>
      {documents ? (
        documents.map((document) => (
          <AddDocumentCard title={document.title} text={document.text} />
        ))
      ) : (
        <p>Nothing to see here</p>
      )}
    </>
  );
}
