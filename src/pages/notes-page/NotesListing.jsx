import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar-component/Navbar";
import NoteCard from "../../components/notecard-component/NoteCard";
import Sidebar from "../../components/side-bar-component/Sidebar";
import { useNotes } from "../../context/useNotes";
import "./NotesListing.css";
import { loadNotes } from "../../utils/notes-util/loadNotes";
import NewNote from "../../components/new-note-component/NewNote";
import FilterBox from "../../components/filter-component/FilterBox";

const NotesListing = () => {
  const { notesState, dispatchNotes } = useNotes();
  const [createNote, setCreateNote] = useState(false);
  const [isFilterBox, setIsFilterBox] = useState(false);
  useEffect(() => {
    loadNotes(dispatchNotes);
    
  }, []);

  const showNotes=()=>{
    const rawNotes=notesState.notes
    const priorityFilteredNotes=rawNotes.filter((note)=>{if(notesState.filterByPriority){
      return note.tags[0]===notesState.filterByPriority
    }else return true})
    return priorityFilteredNotes
  }

  const finalFilteredNotes=showNotes()

  return (
     
    <div className={`notes-app ${createNote && "overlay"}`}>
      <Navbar />
      <Sidebar createNoteState={{ createNote, setCreateNote }} />
      <div className="notes-area p-40">
        <div className="notes-search">
          <div className="search-bar">
            <input type="text" className="notes-search-bar" />
            <i class="bx bx-search search-icon"></i>
            <div className="filter-btn">
              <button onClick={() => setIsFilterBox(!isFilterBox)}>
                <i class="bx bx-filter filter-icon"></i>
              </button>
            </div>
          </div>
        </div>
        {createNote && (
          <NewNote createNoteState={{ createNote, setCreateNote }} />
        )}
        {isFilterBox && <FilterBox />}
        <div className="notes-list">
        {finalFilteredNotes
            .map((noteItem) => (
              <NoteCard
                key={noteItem._id}
                noteItem={noteItem}
                isArchived={false}
                createNoteState={{ createNote, setCreateNote }}
              />
            ))}
        </div>

      </div>
    </div>
  );
};

export default NotesListing
