import "./App.css";
import {Routes,Route} from 'react-router-dom'

import Mockman from "mockman-js";
import SignupPage from "./pages/home-page/SignupPage";
import LoginPage from "./pages/home-page/LoginPage";
import { useAuth } from "./context/useAuth";
import NotesListing from "./pages/notes-page/NotesListing";
import RequiresAuth from "./utils/require-auth/RequiresAuth";
import ArchiveListing from "./pages/notes-page/ArchiveListing";
import TrashListing from "./pages/notes-page/TrashListing";

function App() {
  const {authState}=useAuth()
  const {isUserActive}=authState
  return (
    <div className="App">
      <Routes>
        <Route path='/mock' element={<Mockman/>}/>
        <Route path="/" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/notes" element={<RequiresAuth login={isUserActive}><NotesListing/></RequiresAuth>}/>
        <Route path="/archive" element={<RequiresAuth login={isUserActive}><ArchiveListing/></RequiresAuth>}/>
        <Route path="/trash" element={<RequiresAuth login={isUserActive}><TrashListing/></RequiresAuth>}/>       
      </Routes>
    </div>
  );
}

export default App;
