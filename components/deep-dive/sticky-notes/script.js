/*
  Stick Notes Tutorials

  1 Create view and functions
  2 add storage part.
*/

var container = document.getElementById("container");
var addBtn = document.getElementById("add-btn");
var notes = [];

// add new note
addBtn.addEventListener("click", addNote);
// get all notes
window.addEventListener("DOMContentLoaded", getNotes);

// add note
function addNote() {
  var newNote = { id: "n" + Date.now(), content: "" };
  notes.push(newNote);

  saveDoc(notes);

  createNoteElement(newNote.id, newNote.content);
}

// edit note
function editNote(id, content) {
  for (var i=0; i<notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = content;
    }
  }

  saveDoc(notes);
}

// delete note
function deleteNote(id, noteElement) {
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
  var noteElement = document.createElement("textarea");

  noteElement.value = content;
  noteElement.addEventListener("keyup", (e) => editNote(id, e.target.value));
  noteElement.addEventListener("dblclick", (e) => deleteNote(id, e.target));

  container.prepend(noteElement);
}

// get notes
function getNotes() {
  notes = getDocs();

  for (var i=0; i<notes.length; i++) {
    createNoteElement(notes[i].id, notes[i].content);
  }
}

// get docs from localStorage
function getDocs() {
  if (!localStorage.getItem("noteStorage")) {
    localStorage.setItem("noteStorage", "[]");
  }

  return JSON.parse(localStorage.getItem("noteStorage"));
}

// save doc to localStorage
function saveDoc(notes) {
  localStorage.setItem("noteStorage", JSON.stringify(notes));
}