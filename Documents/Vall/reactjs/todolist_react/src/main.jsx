import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css";
import rootReducer from "./reducer/index.js"
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode store={store}>
    <App />
  </React.StrictMode>,
)
