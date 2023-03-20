
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Inscription from './component/Pages/Inscription';
import Login from "./component/Pages/Login";


function App() {
  return (
    <div className="App">
     
     <Router>
     
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/registre" element={<Inscription />} />
        </Routes>
     
      </Router>
      
    </div>
  );
}

export default App;
