import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient ,QueryClientProvider} from 'react-query';
import  { BrowserRouter as Router} from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router >
    
    <App />

  </Router>
);

