import { saveNote, deleteNote, getNoteById, upDateNote} from './socketsF.js';

const notesList = document.querySelector('#notes');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
let saveId = '';

const noteUI = note => {
  const div = document.createElement('div');
  div.innerHTML += `
      <div>
        <h2>${note.title}</h2>
        <p>${note.description}</p>
        <button class= "update" data-id ="${note._id}" >Update</button>
        <button class= "delete" data-id ="${note._id}" >Delete</button>
      </div>
  `;
  //btnDelete
  const btnDelete = div.querySelector('.delete');
  btnDelete.addEventListener('click', (e) => {
    deleteNote(btnDelete.dataset.id);
  });
  //btnUpDate
  const btnUpDate = div.querySelector('.update');
  btnUpDate.addEventListener('click', (e) => {
    getNoteById(btnUpDate.dataset.id);
  });
  return div;
};

export const renderNotes = notes => {
  notesList.innerHTML = '';
  notes.forEach(note => {
    notesList.append(noteUI(note));
  });
};

export const fillForm = (note) => {
  saveId = note._id;
  title.value = note.title;
  description.value = note.description;
};

export const appendNote = note => {
    notesList.append(noteUI(note));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  if (saveId) {
    upDateNote(saveId, title.value, description.value);
  } else {
    saveNote(title.value, description.value);
  }
  saveId = '';
  title.value = '';
  description.value = '';
};