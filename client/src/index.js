import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

// wrap root component with PersistGate.
// This delays the rendering of app's UI until persisted state has been retrieved and saved to redux.
// connect redux to react app
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './redux';
import { Provider } from 'react-redux';

const {store, persistor} = reduxStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
