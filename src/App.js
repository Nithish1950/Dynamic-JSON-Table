import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Studentlisting from './Studentlisting';
import StdCreate from './StdCreate';
import StdEdit from './StdEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Studentlisting />}></Route>
          <Route path='/student/create' element={<StdCreate />}></Route>
          <Route path='/student/edit/:stdid' element={<StdEdit />}></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
