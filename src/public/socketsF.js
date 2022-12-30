const socket = io();

export const loadNotes = (callBack) => {
  socket.on("server:loadNotes", callBack);
};

export const saveNote = (title, description) => {
  socket.emit("cliente:newNote", { title, description })
};

export const onNewNote = (callBack) => {
  socket.on("server:newNote", callBack);
}