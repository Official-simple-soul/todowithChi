import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoCard from "./TodoCard";
import { v4 } from "uuid";
import Modal from "./Modal";
import { useGlobalContext } from "../../context/context";
import { Button, Table } from "@Official-simple-soul/components-library";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const { todoArr, setTodoArr } = useGlobalContext();
  const [error, setError] = useState(false);
  const [timeOut, setTimeOut] = useState(100);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(0);
  const { showModal, setShowModal } = useGlobalContext();
  const { moreID, setMoreID } = useGlobalContext();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!editing) {
      console.log("hhh");
      if (inputValue === "") {
        setError(true);
      } else {
        setTodoArr((prev) => [
          ...prev,
          { title: inputValue, id: v4(), completed: false },
        ]);
        setInputValue("");
      }
    } else {
      console.log(error);
      const temp = todoArr.map((todo) =>
        todo.id === editId ? { ...todo, title: inputValue } : todo
      );
      setTodoArr(temp);
      setEditing(false);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (error) {
      const interval = setInterval(() => {
        setTimeOut((prev) => {
          if (prev < 1) {
            clearInterval(interval);
            setError(false);
            // return 100;
          }
          return prev - 1;
        });
      }, 50);

      return () => {
        clearInterval(interval);
      };
    } else {
      setTimeout(() => {
        setTimeOut(100);
      }, 1000);
    }
  }, [error]);

  const handleMore = (id, title, obj) => {
    setShowModal(true);
    setMoreID({ id: id, title: title, obj: obj });
  };

  const clickme = () => {
    console.log("clicked");
  };

  const columns = [
    { header: "Stage", accessor: "stage_id" },
    { header: "Task", accessor: "title" },
    { header: "Track", accessor: "track_id" },
    { header: "Due Date", accessor: "due_date" },
    { header: "Status", accessor: "status" },
    { header: "Points", accessor: "points" },
  ];

  const data = [
    {
      stage_id: "10",
      title: "Task",
      track_id: "10",
      due_date: "26/17/2202",
      status: "Completed",
      points: "10",
    },
    {
      stage_id: "4",
      title: "LMS",
      track_id: "4",
      due_date: "26/17/2202",
      status: "Completed",
      points: "100",
    },
  ];

  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <div className='text-center p-4 bg-priBG rounded-md shadow-md min-h-[500px]'>
      <h1 className='font-bold'>Todo-List</h1>
      <Button
        label='My Button'
        btn_color='bg-red-900'
        btn_text_size='text-4xl'
        onClick={clickme}
      />
      <div className='w-full'>
        <Table columns={columns} data={data} onRowClick={handleClick} />
      </div>
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAdd={handleAdd}
        error={error}
        editing={editing}
      />
      <TodoCard
        todoArr={todoArr}
        setTodoArr={setTodoArr}
        editing={editing}
        setInputValue={setInputValue}
        setEditing={setEditing}
        setEditId={setEditId}
        handleMore={handleMore}
      />
      <div
        className={`${
          error ? "w-40" : "w-0"
        } absolute top-14 right-0 rounded-tl-md bg-red-800 text-white text-[12px] transition-all ease-in-out duration-500`}
      >
        <h1 className={`${error ? "flex" : "hidden"} px-3 py-1`}>
          Input cannot be empty
        </h1>
        <div className='flex flex-row-reverse'>
          <div
            className='h-[5px] bg-white'
            style={{
              width: `${timeOut}%`,
            }}
          ></div>
        </div>
      </div>
      {showModal && (
        <Modal
          moreID={moreID}
          setTodoArr={setTodoArr}
          setShowModal={setShowModal}
          todoArr={todoArr}
        />
      )}
    </div>
  );
}

export default MainPage;
