import React, { useEffect, useState } from "react";
import { AiFillPlusSquare, AiFillDelete } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

function Modal({ todoArr, setTodoArr, moreID, setShowModal }) {
  const [inputs, setInputs] = useState([""]);

  useEffect(() => {
    if (moreID.obj) {
      setInputs(moreID.obj);
    }
  }, [moreID]);

  const handlePlus = () => {
    if (inputs[inputs.length - 1] !== "") {
      setInputs([...inputs, ""]);
    }
  };

  const handleInputChange = (value, index) => {
    const temp = inputs.map((ip, idx) => (idx === index ? value : ip));
    setInputs(temp);
  };

  // input = ['one', 'two']

  const handleDel = (idx) => {
    setInputs((prev) => prev.filter((_, id) => id !== idx));
    setTodoArr((prev) =>
      prev.map((item) => item.obj.filter((_, id) => id !== idx))
    );
  };

  const handleSaveAll = () => {
    setTodoArr((prev) =>
      prev.map((todo) =>
        todo.id === moreID.id
          ? { ...todo, obj: todo.obj ? [...todo.obj, ...inputs] : [...inputs] }
          : todo
      )
    );
    setShowModal(false);
  };

  return (
    <div className="modal flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 px-6">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-90"></div>
      <div className="content h-[70vh] w-96 bg-priText rounded-md z-40 text-white p-3 overflow-auto">
        <div className="text-center text-priBG">{moreID.title}</div>
        <div className="border-b border-priBG mb-8 flex items-center justify-between text-black">
          <h1 className="">Add items</h1>
          <FaTimes onClick={() => setShowModal(false)} />
        </div>
        <div>
          {inputs.map((input, index) => (
            <div key={index} className="flex items-center space-x-2 mb-3">
              <input
                type="text"
                placeholder="Add item"
                value={input}
                onFocus
                className="bg-priBG w-full rounded-md px-2 py-1 placeholder:text-sm"
                onChange={(e) => handleInputChange(e.target.value, index)}
              />
              {index !== inputs.length - 1 && (
                <AiFillDelete
                  className="text-red-700 text-4xl rounded-md"
                  onClick={() => handleDel(index)}
                />
              )}
              {index === inputs.length - 1 && (
                <AiFillPlusSquare
                  className="text-priBG text-4xl rounded-md"
                  onClick={handlePlus}
                />
              )}
            </div>
          ))}
          <div className="mx-auto">
            <button
              className="bg-priBG px-8 py-1 rounded-md mt-12"
              onClick={handleSaveAll}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
