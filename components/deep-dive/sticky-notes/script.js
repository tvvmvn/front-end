/*

  Stick Notes Tutorials

  1 presentation about how it works
  
  2 Complete HTML/CSS code 

  3 declare all variables and functions with comments.
  
  4 helper function
  
  5 add note 
  
  6 get notes

  7 update note

  8 delete note

*/

var container = document.getElementById('container');
var addBtn = document.getElementById('add-btn');

// get all notes
window.addEventListener('DOMContentLoaded', getNotes);
// add new note
addBtn.addEventListener('click', addNote);

// get notes
function getNotes() {
  var notes = getDocs();

  for (var i=0; i<notes.length; i++) {
    createNoteElement(notes[i].id, notes[i].content);
  }
}

// add note
function addNote() {
  var notes = getDocs();  
  var newNote = { id: 'n' + Date.now(), content: '' };
  notes.push(newNote);

  saveDoc(notes);

  createNoteElement(newNote.id, newNote.content);
}

// edit note
function editNote(id, content) {
  var notes = getDocs();

  for (var i=0; i<notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = content;
    }
  }

  saveDoc(notes);
}

// delete note
function deleteNote(id, noteElement) {
  var notes = getDocs();

  for (var i=0; i<notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
    }
  }

  saveDoc(notes);

  container.removeChild(noteElement);
}

// render 
function createNoteElement(id, content) {
  var noteElement = document.createElement('textarea');

  noteElement.value = content;
  noteElement.addEventListener('change', (e) => editNote(id, e.target.value));
  noteElement.addEventListener('dblclick', (e) => deleteNote(id, e.target));

  container.prepend(noteElement);
}

// query 
function getDocs() {
  if (!localStorage.getItem('notes')) {
    localStorage.setItem('notes', '[]');
  }

  return JSON.parse(localStorage.getItem('notes'));
}

function saveDoc(notes) {
  localStorage.setItem('notes', JSON.stringify(notes));
}