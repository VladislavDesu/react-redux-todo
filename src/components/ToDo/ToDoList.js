import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
   const list = useSelector((state) => state.todoReducer.list);

   return (
      <ul>
         {list.length === 0 ? (
            <li>Ничего не найдено</li>
         ) : (
            list.map((item) => <ToDoItem key={item.id} item={item} />)
         )}
      </ul>
   );
};

export default ToDoList;
