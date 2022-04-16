import React, { useState } from "react";
import { addNote } from "../../utils/notes-util/addNote";
import { useNotes } from "../../context/useNotes";
import "./NewNote.css";

const initialNoteState={
  _id: "",
  title: "",
  description: "",
  color: "",
  tags: [],
  createdAt:
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate(),
}

const NewNote = ({createNoteState:{createNote,setCreateNote}}) => {
  const [tempNote, setTempNote] = useState(initialNoteState);
  const changeHandler = (e) => {
    setTempNote((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const { dispatchNotes } = useNotes();
  const clickHandler=()=>{
    addNote(tempNote, dispatchNotes)
    setCreateNote(!createNote)
  }
  return (
    <div className="new-note-container p-40 card-shadow br-m">
      <div className="input-field">
        <label className="x-small-text">
          Note title:
          <input
            type="text"
            value={tempNote.title}
            name="title"
            onChange={changeHandler}
            className="input input-primary mt-1"
          />
        </label>
      </div>
      <div className="input-field">
        <label className="x-small-text"> 
          Note description:
          <textarea className="text-area" value={tempNote.description}
            name="description"
            onChange={changeHandler}></textarea>
        </label>
      </div>
      <button className="x-icon" onClick={()=>setCreateNote(false)}><i class='bx bx-x'></i></button>
      <button onClick={clickHandler} className="btn-large btn-primary mt-1">Submit</button>
    </div>
  );
};

export default NewNote;
