import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPanel from './components/LoginPanel'
import Home from './components/Home';
function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={LoginPanel} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
