import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Navbar from './Navbar';
import Quote from './Quote';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: 0,
    };
  }

  render() {
    const { startValue } = this.state;
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/calculator">
            <Calculator start={startValue} />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
