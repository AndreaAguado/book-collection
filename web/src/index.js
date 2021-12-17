import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom'; //Use BrowserRouter instead of HashRouter when I have access to my server configuration
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    //   <BrowserRouter>
    //   <App />
    // </BrowserRouter>,
    document.getElementById('root')
);
