import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App.js'
import './css/style.css'
import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// ReactDOM.render(elements, app)
const app = ReactDOMClient.createRoot(document.getElementById("root"))
app.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)