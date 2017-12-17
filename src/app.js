import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import reducer from './reducers'

import Header from './components/Header'
import Wrapper from './components/Wrapper'
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
      <div>
        <Header/>
        <Wrapper/>
      </div>
    </div>
  )
}
const store = createStore(reducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('app'));