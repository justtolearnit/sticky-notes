import { useState } from "react";

const AddNote = ({addNoteHandler}) => {

    const [notesText, setNotesText] = useState("")
    
    const changeHandler = (e) =>{
        setNotesText(e.target.value)
    }

    const saveClickHandler = () =>{
        addNoteHandler({state:notesText})
    }
    return (
        <div className="note new">
            <textarea className="textarea"
                rows='8'
                cols='10'
                placeholder="Type here to add a note.. ."
                value={notesText}
                onChange={changeHandler} >
            </textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save" onClick={saveClickHandler}>save</button>
            </div>

        </div>
    );
}

export default AddNote;