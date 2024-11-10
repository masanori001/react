
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import './App.css';
import { Home } from './Home';
import { PunchTimeClock } from './PunchTimeClock'
import { LoginPage } from "./LoginForm";


const App = () => {
    
  return (      
          <Router>
            <div className="App">
              <Routes>
                <Route
                 path="/" element={<Home />} 
                 />
                 <Route
                 path="/loginForm" element={<LoginPage />}
                 />
                <Route 
                path="/punchtimeclock" element={<PunchTimeClock 
                />} />
                <Route
                 path="/*" element={<html><h2>404 Not Found</h2></html>} 
                 />
              </Routes>
            </div>
          </Router>
  );
}

export default App;
