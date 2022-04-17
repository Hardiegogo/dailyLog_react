import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar-component/Navbar";
import NoteCard from "../../components/notecard-component/NoteCard";
import Sidebar from "../../components/side-bar-component/Sidebar";
import { useNotes } from "../../context/useNotes";
import "./NotesListing.css";
import { loadNotes } from "../../utils/notes-util/loadNotes";
import NewNote from "../../components/new-note-component/NewNote";
import FilterBox from "../../components/filter-component/FilterBox";

const LabelListing = () => {
  const { notesState, dispatchNotes } = useNotes();
  const [createNote, setCreateNote] = useState(false);
  const [isFilterBox, setIsFilterBox] = useState(false);
  useEffect(() => {
    loadNotes(dispatchNotes);
    
  }, []);


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

        <h3 className="mt-16">High Priority notes:</h3>
        <div className="notes-list">
          {notesState.notes
            .filter((noteItem) => noteItem.tags[0] === "high")
            .map((noteItem) => (
              <NoteCard
                key={noteItem._id}
                noteItem={noteItem}
                isArchived={false}
                createNoteState={{ createNote, setCreateNote }}
              />
            ))}
        </div>
        <h3 className="mt-16">Low Priority notes:</h3>
        <div className="notes-list">
        {notesState.notes
            .filter((noteItem) => noteItem.tags[0] === "low")
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

export default LabelListing
