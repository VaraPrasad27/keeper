import DoneIcone from "@mui/icons-material/Done";
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";

function Edit(props) {
  const [updatedNote, setNote] = useState(props.note);

  function handleClick() {
    props.onEdit(props.id, updatedNote);
    props.onDone();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote({ ...updatedNote, [name]: value });
  }

  return (
    <div className="edit">
      <input name="title" value={updatedNote.title} onChange={handleChange} />
      <textarea
        name="content"
        value={updatedNote.content}
        onChange={handleChange}
        rows={3}
      />
      <Zoom in={true}>
        <Fab className="done" onClick={handleClick}>
          <DoneIcone />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Edit;
