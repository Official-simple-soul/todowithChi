import Link from "next/link";
import React from "react";
import { AiFillEdit, AiFillDelete, AiFillPlusSquare } from "react-icons/ai";


function TodoCard({
  todoArr,
  setTodoArr,
  setEditId,
  setEditing,
  setInputValue,
  handleMore,
}) {
  const handleDelete = (id) => {
    setTodoArr((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleChecked = (id) => {
    setTodoArr((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return (
    <ul className="">
      {todoArr.length > 0 ? (
        todoArr
          .map((todos, idx) => {
            const { title, id, completed, obj } = todos;
            return (
              <li
                key={id}
                className={`${
                  completed && "bg-yellow-600 text-black"
                } px-2 py-1 my-2 flex rounded-md shadow bg-[#00616e] justify-between items-center`}
              >
                <div className="flex space-x-2 items-center">
                  <p className="text-sm">{idx + 1}.</p>
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleChecked(id)}
                  />
                </div>
                <Link href={`/info/${id}`}>
                  <h1
                    className={`${
                      completed && "line-through"
                    } mx-2 text-left `}
                  >
                    {title}
                  </h1>
                </Link>
                <div className="flex items-center space-x-4">
                  <AiFillEdit
                    className="text-blue-300 border border-blue-300 rounded"
                    onClick={() => {
                      setEditId(id);
                      setEditing(true);
                      setInputValue(title);
                    }}
                  />
                  <AiFillDelete
                    className="text-red-600 border border-red-600 rounded"
                    onClick={() => handleDelete(id)}
                  />
                  <AiFillPlusSquare
                    className="rounded"
                    onClick={() => {
                      handleMore(id, title, obj);
                    }}
                  />
                </div>
              </li>
            );
          })
          .reverse()
      ) : (
        <div className="flex justify-center items-center h-[100%] mt-20">
          <h1>No item in todo</h1>
        </div>
      )}
    </ul>
  );
}

export default TodoCard;
