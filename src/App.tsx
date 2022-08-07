import React from 'react';
import logo from './logo.svg';
import Balance from './components/Balance';
import './styles/App.scss';
import SpendingOverview from './components/SpendingOverview';

function App() {
  return (
    <div className="App">

      <Balance balance={921.48} />
      <SpendingOverview />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Marijke Drenth</a>.
      </div>

    </div>
  );
}

export default App;
