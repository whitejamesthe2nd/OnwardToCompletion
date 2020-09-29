import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact render={()=><Home />} />
        <Route path='/login' exact render={()=><Login />} />
      </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
