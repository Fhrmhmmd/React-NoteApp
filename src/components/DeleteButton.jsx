import React from "react";

function DeleteButton({ id, onDelete}) {
    return <button className="note-item__btn" onClick={() => onDelete(id)}>Delete</button>
}


export default DeleteButton;