import { saveNote } from './socketsF.js';

const notesList = document.querySelector('#notes');

const noteUI = note => {
  const div = document.createElement('div');
  div.innerHTML += `
      <div>
        <h2>${note.title}</h2>
        <p>${note.description}</p>
        <button>Update</button>
        <button>Delete</button>
      </div>
  `;
  return div;
};

export const renderNotes = notes => {
  notes.forEach(note => {
    notesList.append(noteUI(note));
  });
};

export const appendNote = note => {
    notesList.append(noteUI(note));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  saveNote(noteForm['title'].value, noteForm['description'].value);
};