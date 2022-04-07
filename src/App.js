import "./App.css";
import {Routes,Route} from 'react-router-dom'

import Mockman from "mockman-js";
import SignupPage from "./pages/home-page/SignupPage";
import LoginPage from "./pages/home-page/LoginPage";
import { useAuth } from "./context/useAuth";
import NotesListing from "./pages/notes-page/NotesListing";

function App() {
  const {authState}=useAuth()
  const {isUserActive}=authState
  return (
    <div className="App">
      <Routes>
        <Route path='/mock' element={<Mockman/>}/>
        <Route path="/" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        {isUserActive ? <Route path="/notes" element={<NotesListing/>}/>:<Route path="/login" element={<LoginPage/>}/> }
      </Routes>
    </div>
  );
}

export default App;
