import React from "react";
import "./TodoItem.css";
//Icons
import ToDo from "../ListIcons/To_do_List";
import Close from "../ListIcons/Close";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/*   <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        
  </p> */}
      {props.text}
      <div className="container">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          <ToDo />
        </span>

        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <Close />
        </span>
      </div>
    </li>
  );
}
export { TodoItem };
