import NotesList from './components/NotesList'
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note",
      date: "12/02/2021"
    },
    {
      id: nanoid(),
      text: "Second note",
      date: "13/02/2021"
    },
    {
      id: nanoid(),
      text: "Third note",
      date: "14/02/2021"
    },
  ]);

  const addNote = (props) => {
    console.log(props.state)
  }


  return (
    <div className="container">
      <NotesList notes={notes} addNoteHandler={addNote} />

    </div>
  );
};
export default App;