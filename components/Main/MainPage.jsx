import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoCard from './TodoCard';
import { v4 } from 'uuid';

function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const [todoArr, setTodoArr] = useState([]);
  const [error, setError] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    if (inputValue === '') {
      setError(true);
    } else {
      setTodoArr((prev) => [
        ...prev,
        { title: inputValue, id: v4(), completed: false },
      ]);
    }
  };


  return (
    <div className="text-center p-4 bg-priBG rounded-md">
      <h1 className="font-bold">Todo-List</h1>
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAdd={handleAdd}
      />
      <TodoCard todoArr={todoArr}/>
    </div>
  );
}

export default MainPage;
