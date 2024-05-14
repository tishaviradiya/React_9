// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreateContextProvider from './Context/CreateContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CreateContextProvider>
    <App />
  </CreateContextProvider>,
)
