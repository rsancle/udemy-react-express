import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Allow App component access to Redux State
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

import 'typeface-roboto';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);