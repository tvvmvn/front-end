var container = document.getElementById("container");
var addBtn = document.getElementById("add-btn");
var notes = [];

if (!localStorage.getItem("noteStorage")) {
  seedData();
}

document.addEventListener("DOMContentLoaded", getNotes);
addBtn.addEventListener("click", addNote);

// Get all notes
function getNotes() {
  notes = JSON.parse(localStorage.getItem("noteStorage"));

  for (var i = 0; i < notes.length; i++) {
    createNoteElement(notes[i].id, notes[i].content);
  }
}

// Add new note
function addNote() {
  var newNote = { id: "n" + Date.now(), content: "" };
  
  notes.push(newNote);
  
  saveData(notes);
  
  createNoteElement(newNote.id, newNote.content);
}

// Edit note
function editNote(id, content) {
  for (var i=0; i<notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = content;
    }
  }

  saveData(notes);
}

// Delete note
function deleteNote(id, noteElement) {
  for (var i=0; i<notes.length; i++) {
    if (notes[i].id === id) {
      // Array.splice(index, count)
      notes.splice(i, 1);
    }
  }

  saveData(notes);

  noteElement.remove();
}

// Render 
function createNoteElement(id, content) {
  var noteElement = document.createElement("textarea");

  noteElement.value = content;

  noteElement.addEventListener("change", function () {
    editNote(id, this.value);
  });

  noteElement.addEventListener("dblclick", function () {
    deleteNote(id, this);
  });

  container.prepend(noteElement);
}

// Generate seed data
function seedData() {
  var seed = [{ id: "n0", content: "My first memo!" }];
  
  saveData(seed);
}

// Synchronize localStorage
function saveData(notes) {
  localStorage.setItem("noteStorage", JSON.stringify(notes));
}