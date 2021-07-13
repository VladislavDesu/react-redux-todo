import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
   const list = useSelector((state) => state.todoReducer.list);
   const searchValue = useSelector((state) => state.todoReducer.searchValue);

   const lowercasedFilter = searchValue.toLowerCase();
   const filteredData = list.filter((item) =>
      item.value.toLowerCase().includes(lowercasedFilter)
   );

   return (
      <ul>
         {filteredData.length === 0 ? (
            <li>Ничего не найдено</li>
         ) : (
            filteredData.map((item) => <ToDoItem key={item.id} item={item} />)
         )}
      </ul>
   );
};

export default ToDoList;
