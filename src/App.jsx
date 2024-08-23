import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/Home/home';
import Movielist from './components/Movielist/Movielist';
import Moviedetails from './pages/Moviedetails/Moviedetails';


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Moviedetails/>}></Route>
                <Route path="movies/:type" element={<Movielist />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
