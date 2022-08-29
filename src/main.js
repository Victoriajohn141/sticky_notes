"use strict"
const noteList = [];

let firstNote = {text: 'i need to buy milk'};

 noteList.push(firstNote);
 
 console.log(firstNote);
 console.log(noteList);


function createNewNote(text) {
 let secondNote = [];

 let note = {text: ''}

 secondNote.push(note)

 return text;

 console.log(text)
}

function createNewNoteV2(value) {
    let note2 = {text: value}

    console.log(value)
    return note2
}

console.log(createNewNoteV2('new note')) // {text: 'new note'}
console.log(createNewNoteV2('another note'))





// const noteContainer = document.querySelector(".notes");
//   // const addNoteButton = document.querySelector(".add-note");
  
//    const noteElement = document.createElement("textarea");

// addNote takes in string, creates a note then adds it into the note container
function addNote(value) {   
 // 1. create note data structure from value (input parameter)
 // 2. add it to the noteList
 let addNote = createNewNoteV2(value);
 noteList.push(addNote)
 

}

// updateNote edits the data structure at the index passed with newContent
// 
function updateNote(index, newContent) {
 
//  let objIndex = noteList.findIndex((obj => obj.index == 1));

 console.log("before update: ", noteList[index])

 noteList[index].text = newContent;

 console.log("after update: ", noteList[index])

}

updateNote(0, 'changed')
console.log(noteList)


// deleteNote removes an item from the noteList vy index
function deleteNote(index) {

 let removeItem = noteList.splice(index, 1)

 console.log('removed: ', removeItem)

}

deleteNote(0)
console.log(noteList)
// console.log('Calling function createNewNote')
// const notesContainer = document.querySelector(".notes");

// const addNoteButton = notesContainer.querySelector(".add-note");

// createNewNote().forEach((note) => {
//   const noteElement = createNoteElement(note.class, note.content);
//   notesContainer.insertBefore(noteElement, addNoteButton);
// });

console.log(addNote('i did something today'))
addNote('testing microphone')
console.log(noteList)