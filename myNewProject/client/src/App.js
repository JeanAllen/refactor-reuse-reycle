import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className='App'>
      <Router>
        <Main exact path='/people/' />
        <Detail path='/:id' />
        <Update path='/people/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
