import Note from './models/Note'

export default (io) => {
  let users =0;
  io.on('connection', (socket) => {
    users = users + 1;
    console.log('New client connected, Clientes conectados: ' + users);

    const emitNote = async() => {
      const notes = await Note.find()
      io.emit('server:loadNotes', notes)
      console.log(notes)
    }
    emitNote()

    socket.on('cliente:newNote', async (data) => {
      const newNote = new Note(data);
      const saveNote = await newNote.save();
      socket.emit('server:newNote', saveNote);
    });


    socket.on('disconnect', () => {
      users = users - 1;
      console.log('Client disconnected, Clientes conectados: ' + users);
    });
  });
}