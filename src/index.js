import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/views/App';
import { configStore } from "./redux/store";

const store = configStore();
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
