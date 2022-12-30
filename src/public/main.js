import { loadNotes, onNewNote } from './socketsF.js';
import { onHandleSubmit, renderNotes, appendNote } from './ui.js';
onNewNote(appendNote);
loadNotes(renderNotes);
const noteForm = document.querySelector('#noteForm');
noteForm.addEventListener('submit', onHandleSubmit);
