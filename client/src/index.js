import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from './redux/index';
import { PersistGate } from "redux-persist/integration/react";

import * as serviceWorker from "./serviceWorkerRegistration.js";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.register()