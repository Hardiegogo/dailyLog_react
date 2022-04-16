import React,{useState,useEffect} from "react";
import Navbar from "../../components/navbar-component/Navbar";
import NoteCard from "../../components/notecard-component/NoteCard";
import Sidebar from "../../components/side-bar-component/Sidebar";
import { useNotes } from "../../context/useNotes";
import "./NotesListing.css";
import { loadNotes } from "../../utils/notes-util/loadNotes";
import NewNote from "../../components/new-note-component/NewNote";




const NotesListing = () => {
  const { notesState, dispatchNotes } = useNotes();
  const [createNote,setCreateNote]=useState(false)

  useEffect(()=>{
    loadNotes(dispatchNotes)
  },[])

  return (
    <div className={`notes-app ${createNote && 'overlay'}`}>
      <Navbar />
      <Sidebar createNoteState={{createNote,setCreateNote}}/>
      <div className="notes-area p-40">
        <div className="notes-search">
          <div className="search-bar">
            <input type="text" className="notes-search-bar"/>
            <i class='bx bx-search search-icon'></i>
            <div className="filter-btn">
              <button>
              <i class='bx bx-filter filter-icon' ></i>
              </button>
            </div>
          </div>
          
        </div>
        {createNote && <NewNote createNoteState={{createNote,setCreateNote}} />}
        <div className="notes-list">
          {notesState.notes.map((noteItem)=><NoteCard key={noteItem._id} noteItem={noteItem}/>)}
        </div>

      </div>
    </div>
  );
};

export default NotesListing;
