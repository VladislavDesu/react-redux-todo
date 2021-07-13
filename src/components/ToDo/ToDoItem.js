import React from "react";
import PropTypes from "prop-types";
import { removeListItem } from "./ToDoWidgets";
import { useDispatch } from "react-redux";

const ToDoItem = (props) => {
   const { item } = props;
   const { id, value } = item;

   const dispatch = useDispatch();
   const handleClick = () => dispatch(removeListItem(id));

   return (
      <li>
         {value ? value : "Пусто"}
         <button onClick={handleClick}>remove</button>
      </li>
   );
};

ToDoItem.propTypes = {
   value: PropTypes.object,
};

export default ToDoItem;
