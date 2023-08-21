/*
  Sticky Notes

  1 Create view 
  2 Add storage
*/

var container = document.getElementById("container");
var addBtn = document.getElementById("add-btn");
var notes = [];

// Synchronize localStorage
function saveDoc(notes) {
  localStorage.setItem("noteStorage", JSON.stringify(notes));
}

// Get all notes
window.addEventListener("DOMContentLoaded", function () {  
  var docs = JSON.parse(localStorage.getItem("noteStorage") || "[]");
  setNotes(docs)  
});

// Add new note
addBtn.addEventListener("click", function () {
  var newNote = { id: "n" + Date.now(), content: "" };
  
  notes.push(newNote);

  var updatedNotes = [...notes, newNote];

  setNotes(updatedNotes)
  
  saveDoc(notes);
});

// Edit note
function editNote(id, content) {
  for (var i=0; i<notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = content;
    }
  }

  setNotes(notes);
}

// Delete note
function deleteNote(id, noteElement) {
  for (var i=0; i<notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
    }
  }

  saveDoc(notes);

  setNotes(notes)
}

// setNotes
function setNotes(notes) {
  for (var i=0; i<notes.length; i++) {
    createNoteElement(notes[i].id, notes[i].content);
  }
}

// Render 
function createNoteElement(id, content) {
  var noteElement = document.createElement("textarea");

  noteElement.value = content;

  noteElement.addEventListener("keyup", function (e) {
    editNote(id, e.target.value)
  });

  noteElement.addEventListener("dblclick", function (e) {
    deleteNote(id, e.target)
  });

  container.prepend(noteElement);
}
