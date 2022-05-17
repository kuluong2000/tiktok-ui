import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home/Home.jsx';
import Following from '~/pages/Following/Following.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/following" element={<Following />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
