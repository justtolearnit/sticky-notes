import NotesList from './components/NotesList'
import SearchBar from './components/SearchBar'
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Headers from './components/Headers';

const App = () => {

  const [notes, setNotes] = useState([]);


  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem('sticky-notes-data')
    );
    if(savedData){
      setNotes(savedData)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem('sticky-notes-data', JSON.stringify(notes));
  }, [notes])



  const addNote = (props) => {
    const date = new Date()
    setNotes([...notes, {
      id: nanoid(),
      text: props.state,
      date: date.toLocaleDateString()
    }])
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const [searhkey, setsearhkey] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  const searchNote = (searchValue) => {
    setsearhkey(searchValue)
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Headers handleToggleDarkMode={setDarkMode} />
        <SearchBar searchNote={searchNote} />
        {notes !== "" ? <NotesList  notes={notes.filter((note) => note.text.toLowerCase().includes(searhkey))} addNoteHandler={addNote} deleteClickHandler={deleteNote} /> : "Loading..."}
      </div>
    </div>
  );
};
export default App;