import React, { useState } from "react";
import { useNotes } from "../../context/useNotes";
import "../new-note-component/NewNote.css";


const FilterBox = () => {
  const { dispatchNotes } = useNotes();

  const clickHandler=(e)=>{
      dispatchNotes({type:"SET_PRIORITY",payload:e.target.value})
  }
  return (
    <div className="new-note-container p-40 card-shadow br-m">
        <h3>Filters </h3>
      <div className="input-field mt-16">
          <h4>Sort by priority:</h4>
        <select name="Priority" className="mt-1" onClick={clickHandler}>
            <option value="high">High</option>
            <option value="low">Low</option>
        </select>
      </div>
      <button className="btn-large btn-primary mt-24" onClick={()=>dispatchNotes({type:"SET_PRIORITY",payload:''})} >Clear filters</button>
      
    </div>
  );
};

export default FilterBox;
