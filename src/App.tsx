import React from 'react';
import logo from './logo.svg';
import Balance from './components/Balance';
import './styles/App.scss';
import SpendingOverview from './components/SpendingOverview';

function App() {
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />

            <title>Frontend Mentor | Expenses chart component</title>


          </head>
          <body>
            <Balance balance={921.48} />
      <SpendingOverview/>
            <div className="attribution">
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
              Coded by <a href="#">Marijke Drenth</a>.
            </div>
          </body>
        </div>
        );
}

        export default App;
