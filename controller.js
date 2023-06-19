function addNote() {
    const noteTitle = document.getElementById('noteTitle').value;
    const noteDescription = document.getElementById('noteDescription').value;
    const noteImportance = document.getElementById('noteImportance').value;
    const noteDuedate = document.getElementById('noteDuedate').value;
    const note = {
        title: noteTitle,
        description: noteDescription,
        importance: noteImportance,
        duedate: noteDuedate
    };
    notes.push(note);
    localStorage.setItem(note);
    renderNotes();
    noteForm.reset();
    
}

function editNote(index) {
    const note = localStorage.getItem(note); 
    note = notes[index];
    const noteTitle = document.getElementById('noteTitel');
    const noteImportance = document.getElementById('noteImportance');
    const noteDuedate = document.getElementById('noteDuedate');
    noteTitle.value = note.title;
    noteDescription.value = note.description;
    noteImportance.value = note.importance;
    noteDuedate.value = note.duedate;
    notes.splice(index, 1);
    renderNotes();
}

const darkButton = document.getElementById("dark-button");

darkButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

