import React from 'react'
import './NoteCard.css'

function NoteCard({noteItem:{title,description,createdAt}}) {
  return (
    <div className="note-container br-m">
        <div className="note-header">
            <div className="note-title small-text">{title}</div>
            <div className="note-header-icons">
                <button><i class='bx bxs-edit card-icons' ></i></button>
                <button><i class='bx bx-pin card-icons' ></i></button>
            </div>
        </div>
        <div className="note-body x-small-text mt-16">
            {description}
        </div>
        <div className="note-footer mt-1">
            <div className="note-date x-small-text grey-text">{createdAt}</div>
            <div className="note-footer-icons">
                <button><i class='bx bx-palette card-icons' ></i></button>
                <button><i class='bx bx-label card-icons' ></i></button>
                <button><i class='bx bx-archive card-icons' ></i></button>
                <button><i class='bx bx-trash-alt card-icons' ></i></button>
            </div>
        </div>
    </div>
  )
}

export default NoteCard