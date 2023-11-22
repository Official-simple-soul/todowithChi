import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../../context/context";
import Modal from "../../../components/Main/Modal";

function Info() {
  const { todoArr, setTodoArr } = useGlobalContext();
  const router = useRouter();
  const { id } = router.query;
  const [infoDetail, setInfoDetail] = useState(null);
  const { showModal, setShowModal } = useGlobalContext();
  const { moreID, setMoreID } = useGlobalContext();

  const handleCheck = (id) => {
    setTodoArr((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFin = (idx) => {
    setInfoDetail({
      ...infoDetail,
      obj: infoDetail.obj.map((e, id) =>
        id === idx ? { item: e, completed: !e.completed } : e
      ),
    });
    console.log(infoDetail);
  };

  const handleMore = (id, title, obj) => {
    setShowModal(true);
    setMoreID({ id: id, title: title, obj: obj });
  };

  useEffect(() => {
    setInfoDetail(todoArr.find((todo) => todo.id === id));
  }, [id, todoArr]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-priBG text-3xl">
          Title: {infoDetail?.title}
        </h1>
        <input
          type="checkbox"
          checked={infoDetail?.completed}
          onChange={() => handleCheck(id)}
        />
      </div>
      <h1 className={`${!infoDetail && "hidden"} font-bold text-priBG my-6`}>
        Status: {infoDetail?.completed ? "Completed" : "Not Completed"}
      </h1>
      <ul className="space-y-4">
        {infoDetail?.obj
          ?.filter((e) => e !== "")
          .map((obj, idx) => (
            <li
              onClick={() => handleFin(idx)}
              className={`${
                infoDetail?.completed
                  ? "bg-slate-900 line-through"
                  : " bg-gray-500"
              } px-2 py-1 rounded-md`}
            >
              <span className="mr-4 border-r pr-1 border-black">{idx + 1}</span>
              {obj}
            </li>
          ))}
      </ul>
      <button
        className="mt-5 px-3 py-1 bg-gray-500 rounded-md"
        onClick={() => handleMore(id, infoDetail?.title, infoDetail?.obj)}
      >
        Add More
      </button>
      {showModal && (
        <Modal
          moreID={moreID}
          setTodoArr={setTodoArr}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default Info;
