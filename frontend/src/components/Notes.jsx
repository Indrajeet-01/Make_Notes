import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import '../styles/notes.css'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState({title: '', content: ''})

    useEffect(() => {
        fetchNotes()
    },[])

    const fetchNotes = async () => {
        try {
            const res = await axios.get('http://localhost:4000/notes')
            setNotes(res.data)
        } catch (error) {
            console.error('error fetching notes', error)
        }
    }

    const addNote = async () => {
        try {
            const res = await axios.post('http://localhost:4000/notes', newNote)
            setNotes([...notes, res.data])
            setNewNote({title: '', content: ''})
        } catch (error) {
            console.error('error in adding note', error)
        }
    }

    const deleteNote = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/notes/${id}`)
            setNotes(notes.filter((note) => note.id !== id))
        } catch (error) {
            console.error('error in deleting the note')
        }
    }

    return (
        <div>
            <h1>Notes app</h1>
            <div className='add-note-container'>
                <input 
                    type="text"
                    placeholder='title'
                    value={newNote.title}
                    onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                />
                <textarea 
                    cols="30" rows="10"
                    placeholder='content'
                    value={newNote.content}
                    onChange={(e) => setNewNote({...newNote, content:e.target.value})}
                />
                <button onClick={addNote}>Add note</button>
            </div>
            <div className='note-container'>
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} onDelete={deleteNote} />
                ))}
            </div>

        </div>
    )
}

export default Notes