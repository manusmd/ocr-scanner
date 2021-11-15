import React, { useEffect, useState } from 'react';
import styles from './Documents.module.css';
import fetchDocuments from '../../utils/fetchDocuments';
import AddDocumentCard, {
  addDocumentCardProps,
} from '../../components/DocumentCard/DocumentCard';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Documents(): JSX.Element {
  const [documents, setDocuments] = useState<addDocumentCardProps[]>([]);
  const [search, setSearch] = useState('');

  const filteredDocuments = documents?.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    async function fetch() {
      const newDocuments = await fetchDocuments(
        'http://server.manu-web.de:1337/documents'
      );
      setDocuments(newDocuments);
    }
    fetch();
  }, []);

  return (
    <>
      <h1 className={styles.title}>All Documents</h1>
      <SearchBar onSearch={setSearch} />
      {filteredDocuments.length === 0 ? (
        <p className={styles.none}>Nothing to see here</p>
      ) : (
        filteredDocuments.map((document) => (
          <AddDocumentCard
            key={document.id}
            title={document.title}
            text={document.text}
          />
        ))
      )}
    </>
  );
}
