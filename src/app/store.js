import { createStore, combineReducers } from "redux";
import todoReducer from "../components/ToDo/ToDoWidgets";

const rootReducer = combineReducers({ todoReducer });

export const store = createStore(rootReducer);
