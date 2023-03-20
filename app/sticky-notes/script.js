let addBtn = document.getElementById('add-btn');
    let container = document.getElementById('container');

    window.addEventListener('DOMContentLoaded', getNotes);
    addBtn.addEventListener('click', addNote);

    function createNoteElement(id, content) {
      let NoteElement = document.createElement('textarea');

      NoteElement.value = content;
      NoteElement.addEventListener('change', (e) => editNote(id, e.target.value));
      NoteElement.addEventListener('dblclick', (e) => deleteNote(e.target, id));

      container.insertBefore(NoteElement, addBtn);
    }
    
    function getDocs() {
      return JSON.parse(localStorage.getItem('notesStorage'));
    }

    function saveDoc(notes) {
      localStorage.setItem('notesStorage', JSON.stringify(notes));
    }

    function getNotes(e) {
      if (!localStorage.getItem('notesStorage')) {
        localStorage.setItem('notesStorage', '[]');
      }

      let initialNotes = getDocs();

      for (let i = 0; i < initialNotes.length; i++) {
        createNoteElement(initialNotes[i].id, initialNotes[i].content);
      }
    }

    function addNote(e) {

      let notes = getDocs();
    
      let newNote = { id: 'n' + Date.now(), content: '' };

      let updateNotes = [...notes, newNote];
      saveDoc(updateNotes);
      
      createNoteElement(newNote.id, newNote.content);
    }

    function editNote(id, content) {
      let notes = getDocs();

      let updatedNotes = notes.map(note => {
        if (note.id === id) {
          return { ...note, content }
        }
        return note;
      })

      saveDoc(updatedNotes);
    }

    function deleteNote(NoteElement, id) {
      let notes = getDocs();

      let remainingNotes = notes.filter(note => id !== note.id);
      saveDoc(remainingNotes);

      container.removeChild(NoteElement);
    }