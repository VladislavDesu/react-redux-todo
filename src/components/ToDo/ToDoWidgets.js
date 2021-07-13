const initialState = {
   searchValue: "",
   addingValue: "",
   list: [
      { id: 1, value: "first" },
      { id: 2, value: "second" },
      { id: 3, value: "third" },
   ],
};

// Actions
const searchValueAction = "todo/searchValue";
const addingValueAction = "todo/addingValue";
const addListItemAction = "todo/addListItem";
const removeListItemAction = "todo/removeListItem";

// Reducer
const todoReducer = (state = initialState, action) => {
   const { type, value, id } = action;

   switch (type) {
      case searchValueAction:
         const lowercasedFilter = value.toLowerCase();
         const filteredData = state.list.filter((item) =>
            item.value.toLowerCase().includes(lowercasedFilter)
         );

         return {
            ...state,
            searchValue: value,
            list: filteredData,
         };
      case addingValueAction:
         return {
            ...state,
            addingValue: value,
         };
      case addListItemAction:
         return {
            ...state,
            list: [...state.list, { id: state.list.length + 1, value }],
         };
      case removeListItemAction:
         return {
            ...state,
            list: state.list.filter((item) => item.id !== id),
         };
      default:
         return state;
   }
};

// Action Creators
const changeSearchValue = (e) => {
   const value = e.target.value;
   return { type: searchValueAction, value };
};

const changeAddingValue = (e) => {
   const value = e.target.value;
   return { type: addingValueAction, value };
};

const addListItem = (value) => {
   return { type: addListItemAction, value };
};

const removeListItem = (id) => {
   return { type: removeListItemAction, id };
};

export default todoReducer;
export { changeSearchValue, changeAddingValue, addListItem, removeListItem };
