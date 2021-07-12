import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue } from "./ToDoWidgets";

const ToDoSearch = () => {
   const searchValue = useSelector((state) => state.todoReducer.searchValue);

   const dispatch = useDispatch();

   const handleChange = (e) => dispatch(changeSearchValue(e));

   return (
      <p>
         <input type="text" value={searchValue} onChange={handleChange} />
      </p>
   );
};

export default ToDoSearch;
