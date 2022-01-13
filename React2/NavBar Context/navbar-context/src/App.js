import React from 'react';
import './App.css';

import FormWrapper from './components/FormWrapper';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <NavBar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
