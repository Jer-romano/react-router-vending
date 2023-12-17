import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Pretzels from './Pretzels';
import Soda from './Soda';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<VendingMachine/>} />
          <Route path='/chips' element={<Chips/>} />
          <Route path='/pretzels' element={<Pretzels/>} />
          <Route path='/soda' element={<Soda/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
