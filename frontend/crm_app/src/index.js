import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

//redux imports
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor } from '../src/redux/store';
import store from '../src/redux/store';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<div> Fetching data, please wait</div>}
      >
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
