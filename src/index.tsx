import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'src/app/assets/styles/index.sass';
import App from './App';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { Router } from 'react-router';
import registerServiceWorker from './registerServiceWorker';  

const target = document.getElementById('root') as HTMLElement;
registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
  </Provider>,
  target
);

if ((module as any).hot) {
  (module as any).hot.
    accept('./App', () => {
      const NextApp = require('./App').default;
      ReactDOM.render(
        <Provider store={store}>
          <div>
            <Router history={history}>
              <NextApp />
            </Router>
          </div>
        </Provider>,
        target
      );
    });
}