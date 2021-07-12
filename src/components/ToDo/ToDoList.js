import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
   const list = useSelector((state) => state.todoReducer.list);

   return (
      <ul>
         {list.map((item) => (
            <ToDoItem key={item.id} value={item.value} />
         ))}
      </ul>
   );
};

export default ToDoList;
