import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Fab, Zoom } from "@mui/material";
import Edit from "./Edit";
import { useState } from "react";

function Note(props) {
  const [isHidden, setHidden] = useState(false);

  function onEdit(id, note) {
    props.onEdit(id, note);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    if (isHidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  }

  return (
    <div className="note">
      <button className="edit-btn" onClick={handleEdit}>
        <EditIcon />
      </button>
      {!isHidden ? (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      ) : (
        <Edit
          id={props.id}
          note={props.note}
          onEdit={onEdit}
          onDone={handleEdit}
        />
      )}

      <Zoom in={!isHidden}>
        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
