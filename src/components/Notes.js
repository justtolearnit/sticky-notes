import '../index.css'

const Notes = (notes) =>{
    const {id, text,date}=notes.note;
    return(
        <div className="note">
            <span> {text} </span>
            <div className="note-footer">
                <small>{date}</small>
                <button>Delete</button>
           
            </div>
        </div>
    );
}
export default Notes;