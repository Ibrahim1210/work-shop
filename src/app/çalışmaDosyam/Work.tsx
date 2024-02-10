import React from "react";
import { useState } from "react";

export default function Work({ onCreate }: any) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event: any) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // event.preventDefault ise tıkladığında sayfanın yenilenmesini engelleyer.
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="font-semibold text-lg text mt-3">
        Lütfen Task Ekleyiniz!
      </h3>
      <form className="flex flex-col w-96 ">
        <label className="mt-2">Başlık</label>
        <input
          value={title}
          onChange={handleChange}
          className="border border-stone-950 rounded-md mt-2 p-1"
          type="text"
        />
        <label className="mt-2">Task Giriniz!</label>

        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="border border-stone-950 rounded-md mt-2"
          rows={5}
        />
        <button
          onClick={handleSubmit}
          className="border border-stone-950 rounded-md mt-3 p-2 bg-green-600"
        >
          Oluştur
        </button>
      </form>
    </div>
  );
}
