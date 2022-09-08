import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Main from './Main';
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
      <Main />
  </React.StrictMode>
);