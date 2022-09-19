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



// addNote takes in string, creates a note then adds it into the note container
function addNote(value) {  
console.log("adding note") 
 // 1. create note data structure from value (input parameter)
 // 2. add it to the noteList
 let addNote = createNewNoteV2(value);
 noteList.push(addNote)

 console.log(noteList)
 return addNote

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
 removeItem

 console.log('removed: ', removeItem)

}

deleteNote(0)

// ui funcyions

function createNewList(type, index) {
    console.log('bread ', type, typeof type)

    console.log('debugging passing index into createNewList function: ', index, typeof index)

    const list = document.createElement('div');
    const wrapper = document.createElement('div');
    const divNote = document.createElement('div');
    const text = document.createElement('textarea');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
  
    text.value = type || "";
    list.className = "note-list";
    wrapper.className = "note-wrapper";
    divNote.className = "first-note";
    text.className = "note";
    button1.className = "action-1"; 
    button2.className = "action-2";
    img1.className = "icon-1"; 
    img1.src = "./src/icons/edit.png";
    img2.className = "icon-2"; 
    img2.src = "./src/icons/bin.png";
    img2.title = "click to delete"
    text.placeholder = 'enter text';

    // const buttonTwo= document.querySelector(".action-2")
    button2.addEventListener('click', function () {
     
      deleteNote(index)

      console.log('button clicked')

      list.remove();

    })
  
    list.appendChild(wrapper);
  
    wrapper.appendChild(divNote);
  
    divNote.appendChild(text);
    divNote.appendChild(button1);
    divNote.appendChild(button2);
  
    button1.appendChild(img1);
    button2.appendChild(img2);

    return list

    

}


function renderApp() {

  const app = document.querySelector("#app")

  // loop over noteListlo
  for (let i = 0; i < noteList.length; i++) {

    let item = noteList[i];

    const list = createNewList(item.text, i)

    console.log('item from array is: ', item)

    app.appendChild(list)

  }


 // create list item
  // set text in ui to text of list
  // append to app

  return

}

function addNoteButtonEvent() {
    let newNote = addNote("");

    const list = createNewList(newNote.text,0)

    console.log(list)
    
    app.appendChild(list)

}

renderApp()


function searchNote(query) {

  console.log('staert', noteList)
  const matched = [];
  // go thrpugh everything in  noteList
  for (let i = 0; i < noteList.length; i++) {
    console.log('debugging loop ', noteList[i], noteList[i].text)
    // check if it mactches
    if((noteList[i].text || '').includes(query)) {
      console.log('we matched ', noteList[i].text)
      matched.push(noteList[i])
      // if it does; keep it aside
    }
     else {
      console.log('not found ', noteList[i].text)
     }
    
  }
  
  // return items that matched
  console.log('end', noteList)

  return matched
}



// console.log(addNote('new note')) // {text: 'new note'}
// console.log(addNote('another note'))

// console.log('Result of searching: ', searchNote('note'));