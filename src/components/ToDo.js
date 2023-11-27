import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const ToDo = ({task}) => {
    return(
        <div classname = 'ToDo'>
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    )
}