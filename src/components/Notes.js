import '../index.css'

const Notes = ({ note, deleteClickHandler }) => {



    return (
        <div key={note.id} className="note">
            <span>{note.text}</span>
            <div className="note-footer">
                <small>{note.date}</small>
                <button onClick={()=>deleteClickHandler(note.id)} className="delete-button" >Delete</button>
            </div>
        </div>
    );
}
export default Notes;