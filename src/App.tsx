import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home'
import {Login} from './pages/login'
import {Feed} from './pages/feed'
import { UseState } from "./pages/useState";
import { UseEffect } from "./pages/useEffect";
import { UseMemo } from "./pages/useMemo";
import { UseCallBack } from "./pages/useCallBack";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/UseState" element={<UseState/>} />
          <Route path="/UseEffect" element={<UseEffect/>} />
          <Route path="/UseMemo" element={<UseMemo/>} />
          <Route path="/UseCallBack" element={<UseCallBack/>} />
        </Routes>
    </Router>
  )
    
}

export default App;
