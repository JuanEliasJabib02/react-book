import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	/* https://react.dev/reference/react/StrictMode 
    - Stric Mode cause only in dev mode a re-render to validated things
    a help us to find bugs ect,
  */
	/* 	<React.StrictMode>
	 */ <App />
	/* 	</React.StrictMode>
	 */
);
