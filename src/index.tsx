import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);


serviceWorkerRegistration.unregister();
reportWebVitals();
