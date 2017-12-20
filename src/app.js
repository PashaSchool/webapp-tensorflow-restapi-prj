import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import reducer from './reducers'

import Wrapper from './components/Wrapper'

const App = () => <Wrapper/>

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));