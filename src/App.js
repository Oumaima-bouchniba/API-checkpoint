import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import UserList from './UserList';
import UserDetails from './UserDetails';

function App() {
  return (

    <Router>
       <Routes>
         <Route path= "/" element={<UserList/>} />
         <Route path="/:id" element={<UserDetails />} />
       </Routes>
    </Router>
  );
}

export default App;
