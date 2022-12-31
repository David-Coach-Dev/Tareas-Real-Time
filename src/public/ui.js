import { saveNote, deleteNote, getNoteById, upDateNote} from './socketsF.js';

const notesList = document.querySelector('#notes');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
let saveId = '';

const noteUI = note => {
  const div = document.createElement('div');
  div.innerHTML += `
    <div class="card card-body d-flex flex-row justify-content-between rounded-3 mb-2 animate__animated animate__fadeInUp">
      <div class="d-flex flex-column mb-2">
        <h2 class="text-primary ">${note.title}</h2>
        <p class="text-secondary">${note.description}</p>
      </div>
      <div class="d-flex flex-column mb-2">
          <button class= "btn btn-primary update" data-id ="${note._id}" >Update</button>
          <button class= "btn btn-danger delete" data-id ="${note._id}" >Delete</button>
      </div>
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
  title.focus();
  saveId = note._id;
  title.value = note.title;
  description.value = note.description;
};

export const appendNote = note => {
    notesList.append(noteUI(note));
};

export const onHandleSubmit = (e) => {
  e.preventDefault();
  if (title.value === '' || description.value === '') {
    if (title.value === "") {
      title.focus();
    }else if (description.value === "") {
      description.focus();
    }
    return alert('Por favor ingrese todos los campos');
  } else {

    if (saveId) {
      upDateNote(saveId, title.value, description.value);
    } else {
      saveNote(title.value, description.value);
    }
  }
  saveId = '';
  title.value = '';
  description.value = '';
};