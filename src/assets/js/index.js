import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css';
import '../css/styles.scss';
import { store } from './store/store'
import { dummyActions } from './dummyActions' // TO DO: Delete later
import { ConnectedAppRouter } from './routers/AppRouter'
import KittenImage from '../img/kitten.jpg'; // This is how to add images

store.subscribe(() => {
  console.log(store.getState()) // TO DO: Delete later
})
// Console log the initial state before any actions
console.log(store.getState()) // TO DO: Delete later

dummyActions() // TO DO: Delete later

const jsx = (
  <Provider store={store}>
    <ConnectedAppRouter />
    <img src={KittenImage} alt='Kitten'/> {/* This is how to add images */}
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))