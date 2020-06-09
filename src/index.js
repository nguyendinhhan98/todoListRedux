import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Buoc 1
//store
import { createStore } from 'redux';
//reducer
import myReducer from './reducers/index';
//ket noi react vs redux can provider
import { Provider } from 'react-redux';


//Buoc 2
const store = createStore(myReducer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
