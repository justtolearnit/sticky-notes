import AddNote from "./AddNote";
import Notes from "./Notes";

const NotesList = (props) => {
    const { notes, addNoteHandler } = props;
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Notes note={note} />
            ))}
            <AddNote addNoteHandler={addNoteHandler}/>
        </div>

    );
}
export default NotesList;