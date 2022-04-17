import axios from "axios";
import React from "react";
import { useNotes } from "../../context/useNotes";
import "./NoteCard.css";
import { addOrRemoveFromArchive } from "../../utils/notes-util/addOrRemoveFromArchive";
import { addToTrash } from "../../utils/trash-util/addToTrash";

const deletePermanently=(trashNote,dispatchNotes)=>{
    dispatchNotes({type:"DELETE_NOTE",trashNote:trashNote})
}

function NoteCard({
  noteItem: { _id, title, description, color, tags, createdAt },
  isArchived,isTrash
}) {
  const { dispatchNotes } = useNotes();
  return (
    <div className="note-container br-m">
      <div className="note-header">
        <div className="note-title small-text">{title}</div>
        <div className="note-header-icons">
          {(!isArchived && !isTrash) && (
            <button>
              <i className="bx bx-edit card-icons"></i>
            </button>
          )}
          {(!isArchived && !isTrash) && (
            <button>
              <i className="bx bx-pin card-icons"></i>
            </button>
          )}
        </div>
      </div>
      <div className="note-body x-small-text mt-16">{description}</div>
      <div className="note-footer mt-1">
        <div className="note-date x-small-text grey-text">{createdAt}</div>
        <div className="note-footer-icons">
          {(!isArchived && !isTrash) && (
            <button>
              <i className="bx bx-palette card-icons"></i>
            </button>
          )}

          {(!isArchived && !isTrash) && (
            <button>
              <i className="bx bx-label card-icons"></i>
            </button>
          )}
          {!isTrash && <button
            onClick={() =>
              addOrRemoveFromArchive(
                { _id, title, description, color, tags, createdAt },
                dispatchNotes,
                isArchived
              )
            }
          >
            <i
              className={`bx bx-archive card-icons ${isArchived && "active-icon"}`}
            ></i>
          </button>}
          {!isTrash && <button onClick={()=>addToTrash({ _id, title, description, color, tags, createdAt },
                dispatchNotes,isArchived,isTrash)}>
            <i className={`bx bx-trash-alt card-icons ${isTrash && "active-icon"}`}></i>
          </button>}
          {isTrash && <button className="btn btn-success" onClick={()=>addToTrash({ _id, title, description, color, tags, createdAt },
                dispatchNotes,isArchived,isTrash)}>Restore</button>}

          {isTrash && <button className="btn btn-danger" onClick={()=>deletePermanently({ _id, title, description, color, tags, createdAt },dispatchNotes)}>Delete permanently</button>}
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
