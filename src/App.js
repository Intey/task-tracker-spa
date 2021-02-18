import React from 'react'
import logo from './logo.svg'
// import { Counter } from './features/counter/Counter'
import './App.css'

import {Board} from './features/board/Board'
import ReactTooltip from 'react-tooltip';

function App() {
  return (
    <div className="App">
      <Board/>
      <ReactTooltip delayShow={200} />
    </div>
  );
}

export default App;
