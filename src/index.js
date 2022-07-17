import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import NOMatchRoute from './routes/no-match';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}></Route>
        <Route path="expenses" element={<Expenses />}></Route>
        <Route path="*" element={<NOMatchRoute/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

