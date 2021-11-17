import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Documents from './pages/Documents/Documents';
import './globals.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="documents" element={<Documents />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
