
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import './App.css';
import { Home_Page } from './Home_Page';
import { Timestamp_Page } from './Timestamp_Page'
// import { PageHeader } from '../commom_compornent/PageHeader'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/time_stamp" element={<Timestamp_Page />} />
          <Route path="/*" element={<html><h2>404 Not Found</h2></html>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
