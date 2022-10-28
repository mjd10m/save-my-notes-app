const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

function createNewNote(note, notesArray){
    const newNote = {
        id: uuidv4(),
        title: note.title,
        text: note.text 
    }
    notesArray.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, '../database/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    )
}

function deleteNote(noteID, notesArray) {
    index = notesArray.findIndex(x => x.id === noteID)
    const newNotesArray = notesArray.splice(index, 1)
    fs.writeFileSync(
        path.join(__dirname, '../database/db.json'),
        JSON.stringify({notes: newNotesArray}, null, 2)
    )
    return true
}











module.exports = {createNewNote, deleteNote};