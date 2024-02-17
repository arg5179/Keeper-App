import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })


    function handleNote(event) {
        const{name, value} = event.target;

        setNote((preValue) => {
            return {...preValue, [name]: value};
        });
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title:"",
            content: ""
        })
        event.preventDefault();
    }

    function expand(){
      setExpanded(true);
    }

    
  return (
    <div>
      <form className="create-note">
        {isExpanded ? <input name="title" placeholder="Title" value={note.title} onChange={handleNote} /> : null}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded ? "3" :"1"} value={note.content} onChange={handleNote} onClick={expand} />
        <Zoom in={isExpanded ? true :false}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;