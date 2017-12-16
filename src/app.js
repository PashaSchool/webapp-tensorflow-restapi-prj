import React from 'react';
import {render} from 'react-dom';

import Header from './components/Header'

class App extends React.Component {
  render () {
    return <div> Awwyeeahhh :D React is here bebe </div>
  }
}

render(<App/>, document.getElementById('app'));