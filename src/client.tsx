import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
//import './index.css'
import { BrowserRouter } from 'react-router-dom';
console.log("#client");

function Page(){
  return(<div>hoge</div>
  );
}
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Page />
)
/*
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
*/
