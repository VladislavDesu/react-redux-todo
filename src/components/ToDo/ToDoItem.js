import React from "react";
import PropTypes from "prop-types";

const ToDoItem = (props) => {
   const { value } = props;

   return (
      <li>
         {value}
         <button>remove</button>
      </li>
   );
};

ToDoItem.propTypes = {
   value: PropTypes.string,
};

export default ToDoItem;
