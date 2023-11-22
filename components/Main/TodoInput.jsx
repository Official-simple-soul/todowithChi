import React, { useState } from 'react';

function TodoInput({handleAdd, inputValue, setInputValue, error, editing}) {
  

  return (
    <form
      action=""
      className="my-4 flex justify-between space-x-6 items-center"
    >
      <input
        type="text"
        value={inputValue}
        className={`${error && 'border border-red-600'} w-full bg-black text-[12px] rounded-md placeholder:text-gray-500 placeholder:text-[10px] px-2 py-1 focus:outline-none`}
        placeholder="Enter a Todo..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="bg-yellow-600 px-3 rounded-md text-black cursor-pointer" onClick={handleAdd}>
        {editing?'Save': 'Add'}
      </button>
    </form>
  );
}

export default TodoInput;
