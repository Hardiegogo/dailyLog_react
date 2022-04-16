import React from "react";
import './Sidebar.css'
const Sidebar = ({createNoteState:{createNote,setCreateNote}}) => {
  return (
    <aside className="sidebar p-32">
      <div className="list-container">
        <ul className="stacked-list">
          <li className={`list-item stacked-list-item ${createNote && 'overlay'}`}><i class='bx bx-home-alt list-icon'></i> Home</li>
          <li className={`list-item stacked-list-item ${createNote && 'overlay'}`}><i class='bx bx-label list-icon' ></i> Labels</li>
          <li className={`list-item stacked-list-item ${createNote && 'overlay'}`}><i class='bx bx-archive list-icon' ></i>Archive</li>
          <li className={`list-item stacked-list-item ${createNote && 'overlay'}`}><i class='bx bx-trash-alt list-icon' ></i> Trash</li>
          <li className={`list-item stacked-list-item ${createNote && 'overlay'}`}><i class='bx bx-user list-icon'></i>Profile</li>
        </ul>
      </div>
      <button className='btn-large btn-primary' onClick={()=>setCreateNote(!createNote)}>Create a new Note</button>
    </aside>
  );
};

export default Sidebar;
