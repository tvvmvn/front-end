var container = document.getElementById("container");
var addBtn = document.getElementById("add-btn");

class StickyNote { // react class component
  
  notes;

  constructor() {
    this.notes = JSON.parse(localStorage.getItem("noteStorage") || "[]");
  }

  getNotes() {
    return JSON.parse(localStorage.getItem("noteStorage") || "[]");
  }
  
  saveDoc(notes) {
    localStorage.setItem("noteStorage", JSON.stringify(notes));
  }

  addNote() {
    var newNote = { id: "n" + Date.now(), content: "" };  
    var x = JSON.parse(localStorage.getItem("noteStorage") || "[]");
    x.push(newNote)

    localStorage.setItem("noteStorage", JSON.stringify(x));

    this.render()
  }

  editNote(id, content) {
    for (var i=0; i<notes.length; i++) {
      if (notes[i].id === id) {
        notes[i].content = content;
      }
    }
  
    this.saveDoc(notes);
    this.render()
  }

  deleteNote(id, noteElement) {
    for (var i=0; i<notes.length; i++) {
      if (notes[i].id === id) {
        notes.splice(i, 1);
      }
    }
  
    this.saveDoc(notes);
    this.render()
  }

  render() {
    var addBtn = document.createElement("button");    
    addBtn.textContent = "New Note +";
    addBtn.addEventListener("click", this.addNote);
    document.body.prepend(addBtn);

    var notes = this.notes;

    for (var i=0; i<notes.length; i++) {
      var noteElement = document.createElement("textarea");
      noteElement.value = notes[i].content;
      noteElement.addEventListener("keyup", (e) => {
        this.editNote(id, e.target.value)
      });
      noteElement.addEventListener("dblclick", (e) => {
        this.deleteNote(id, e.target.value)
      });
      container.prepend(noteElement);
    }
  }
}

var stickyNote = new StickyNote();

stickyNote.render();




