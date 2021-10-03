import AddNote from "./AddNote";
import Notes from "./Notes";

const NotesList = (props) => {
    const { notes, addNoteHandler, deleteClickHandler } = props;

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Notes note={note} deleteClickHandler={deleteClickHandler}/>
            ))}
            <AddNote addNoteHandler={addNoteHandler}/>
        </div>

    );
}
export default NotesList;