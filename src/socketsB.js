import Note from './models/Note'

export default (io) => {
  let users =0;
  io.on('connection', (socket) => {
    users = users + 1;
    console.log('New client connected, Clientes conectados: ' + users);

    const emitNote = async() => {
      const notes = await Note.find()
      io.emit('server:loadNotes', notes)
    }
    emitNote()

    socket.on('cliente:newNote', async (data) => {
      const newNote = new Note(data);
      const saveNote = await newNote.save();
      io.emit('server:newNote', saveNote);
    });

    socket.on('cliente:deleteNote', async (id) => {
      await Note.findByIdAndDelete(id);
      emitNote();
    });

    socket.on('cliente:getNoteById', async (id) => {
      const note = await Note.findById(id);
      io.emit('server:selectedNote', note);
    });

    socket.on('cliente:upDateNote', async (data) => {
      await Note.findByIdAndUpdate(data._id, {
        title: data.title,
        description: data.description
      });
      emitNote();
    });


    socket.on('disconnect', () => {
      users = users - 1;
      console.log('Client disconnected, Clientes conectados: ' + users);
    });
  });
}