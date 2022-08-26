"use strict"

function createNewNote() {
  console.log('Calling function createNewNote')
const notesContainer = document.querySelector(".notes");

const addNoteButton = notesContainer.querySelector(".add-note");

createNewNote().forEach((note) => {
  const noteElement = createNoteElement(note.class, note.content);
  notesContainer.insertBefore(noteElement, addNoteButton);
});

}
const noteContainer = document.querySelector(".notes");
  // const addNoteButton = document.querySelector(".add-note");
  
   const noteElement = document.createElement("textarea");

function addNote() {   

}

function updateNote(id, newContent) {

}

function deleteNote() {

}