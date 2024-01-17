import React from 'react'
import '../styles/noteCard.css'

const NoteCard = ({note, onDelete}) => {
  const formattedTimestamp = new Date(note.created_at).toLocaleString();

  return (
    <div className='note-card'>
        <h3>{note.title}</h3>
        <p>{note.content}</p>

        <div className='card-footer'>
          <span className='timestamp'>{formattedTimestamp}</span>
          <button className='dltBtn' onClick={() => onDelete(note.id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
      </div>
    </div>
  )
}

export default NoteCard