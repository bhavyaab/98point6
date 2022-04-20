import React from 'react';
import  FourDots from './component/fourDots/fourDots';
import { Welcome } from './component/welcome/welcome';
import {OneOrTwoPlayer} from './component/option/oneTwoPlayer';
import { Option } from './component/option/option';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/oneOrTwoPlayer" element={<OneOrTwoPlayer />} />
            <Route path="/option" element={<Option />} />
            <Route path="/fourDot" element={<FourDots />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
