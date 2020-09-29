import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/LoginPanel'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={()=><Home />} />
          <Route path='/login' exact render={()=><LoginPanel />} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
