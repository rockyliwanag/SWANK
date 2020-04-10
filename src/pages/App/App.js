import React,{Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import './App.css';

/*------ Pages ------*/


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            HELLO WORLD!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
