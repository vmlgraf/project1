const notes = [];

const noteList = document.getElementById('noteList');
const noteForm = document.getElementById('noteForm');

function renderNotes() {
  noteList.innerHTML = '';
  notes.forEach((note, index) => {
    const noteElement = document.createElement('table');
    noteElement.className = 'note';
    noteElement.innerHTML = 
    `
    <tr>
      <th onclick="sortTable()">Status</th>
      <th onclick="sortTable()">Titel</th>
      <th onclick="sortTable()">Fälligkeitsdatum</th>
      <th onclick="sortTable()">Erstellungsdatum</th>
      <th onclick="sortTable()">Wichtigkeit</th>
      <th></th>
    </tr>
    <tr>
      <td><input type="checkbox" id="status" value="">Offen</td>
      <td>${note.title}</td>
      <td>${note.description}</td>
      <td>${note.importance}</td>
      <td>${note.duedate}</td>
      <td><button onclick="editNote"(${index})">Bearbeiten</button></td>
    </tr>
    `;
    noteList.appendChild(noteElement);
  });
}

renderNotes();
  document.addEventListener(DOMException, function() {
    noteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addNote();
  });
});

