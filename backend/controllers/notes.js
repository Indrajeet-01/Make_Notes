import db from "../database.js";

export const makeNote = (req,res) => {
    const {title, content} = req.body
    const query = 'INSERT INTO notes (title, content, created_at) VALUES (?, ?, NOW())'

    db.query(query, [title, content], (err, result) => {
        if(err) {
            res.status(500).send('error inserting note into database')
        } else {
            res.status(200).json({id:result.insertId, title, content, created_at: new Date().toISOString(),})
        }
    })
}

export const getNotes = (req, res) => {
    const query = 'SELECT * FROM notes'

    db.query(query, (err, results) => {
        if(err) {
            res.status(500).send('error fetching notes from the database')
        } else {
            res.status(200).json(results)
        }
    })
}

export const deleteNote = (req, res) => {
    const noteID = req.params.id
    const query = 'DELETE FROM notes WHERE id = ?'

    db.query(query, [noteID], (err) => {
        if(err) {
            res.status(500).send('error in deleting note from database')
        } else {
            res.status(204).send('deleted successfully')
        }
    })
}