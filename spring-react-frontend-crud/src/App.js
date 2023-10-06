
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; //importing bootstrap installed in the node modules
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EdiUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/' element={<Home/>} /> {/* Home.js */}
          <Route exact path='/adduser' element={<AddUser/>} /> {/* Adduser.js */}
          <Route exact path='/edituser/:id' element={<EditUser/>} /> {/* Adduser.js */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
