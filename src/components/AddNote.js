import { useState } from "react";

const AddNote = (props) => {

    const {addNoteHandler} = props;
    const [notesText, setNotesText] = useState("")
    const characterLimit = 200

    const changeHandler = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNotesText(e.target.value)
        }
    }

    const saveClickHandler = () => {
        if (notesText.trim().length > 0) {
            addNoteHandler({ state: notesText })
            setNotesText("")
        }
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
                <small>{characterLimit - notesText.length}</small>
                <button className="save" onClick={saveClickHandler}>save</button>
            </div>
        </div>
    );
}

export default AddNote;