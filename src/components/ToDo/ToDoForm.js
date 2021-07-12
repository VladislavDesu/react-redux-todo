import { useSelector, useDispatch } from "react-redux";
import { changeAddingValue, addListItem } from "./ToDoWidgets";

const ToDoForm = () => {
   const inputValue = useSelector((state) => state.todoReducer.addingValue);
   const dispatch = useDispatch();

   const handleChange = (e) => dispatch(changeAddingValue(e));

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addListItem(inputValue));
   };

   return (
      <form>
         <input type="text" value={inputValue} onChange={handleChange} />
         <button onClick={handleSubmit}>Add</button>
      </form>
   );
};

export default ToDoForm;
