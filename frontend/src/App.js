import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './component/Pages/Dashboard';
import Enregistrer from './component/Pages/etudiants/Enregistrer';
import ListeEtudiants from './component/Pages/etudiants/ListeEtudiants';
import Login from "./component/Pages/Login";
import SignUp from './component/Pages/SignUp';


function App() {
  return (
      <div className="App">
        
        <Router>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/registre" element={<Enregistrer />} />
            <Route exact path="/etudiants" element={<ListeEtudiants />} />

          </Routes>

        </Router>

      </div>
  );
}

export default App;