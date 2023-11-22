import React, { useContext, useState } from "react";

const todoContext = React.createContext();

const TodoProvider = ({children}) => {
  const [todoArr, setTodoArr] = useState([]);
  const [showModal, setShowModal] = useState(false);
    const [moreID, setMoreID] = useState({});
  return (
    <todoContext.Provider
      value={{
        todoArr,
        setTodoArr,
        showModal,
        setShowModal,
        moreID,
        setMoreID,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(todoContext);
};

export { useGlobalContext, TodoProvider };
