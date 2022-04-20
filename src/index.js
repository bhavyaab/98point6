import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './app/App';
import { store } from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

function AppWithCallbackAfterRender() {
  return <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

serviceWorker.unregister();
