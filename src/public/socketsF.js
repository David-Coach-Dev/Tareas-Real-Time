const socket = io();

export const loadNotes = (callBack) => {
  socket.on("server:loadNotes", callBack);
};

export const saveNote = (title, description) => {
  socket.emit("cliente:newNote", { title, description })
};

export const onNewNote = (callBack) => {
  socket.on("server:newNote", callBack);
};

export const deleteNote = (id) => {
  socket.emit("cliente:deleteNote", id);
};

export const getNoteById = (id) => {
  socket.emit("cliente:getNoteById", id);
};

export const onSelectedNote = (callBack) => {
  socket.on("server:selectedNote", callBack);
}

export const upDateNote = (id, title, description) => {
  socket.emit("cliente:upDateNote", { _id:id, title, description});
};