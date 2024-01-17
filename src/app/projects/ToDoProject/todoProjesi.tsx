import React, { ChangeEvent } from "react";
import { useState } from "react";
import { todoType } from "./appTypes";
import { TodoItem } from "./TodoItem";

function TodoProjesi() {
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };

  const addNewTask = () => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask("");
    setWorkDay(0);
    console.log(todoList);
  };
  const deleteTask = (nameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== nameToDelete;
      })
    );
  };
  return (
    <div className="App">
      <div>
        <h1 className="flex flex-col w-96 m-auto items-center text-xl text-red-600 ">
          To Do{" "}
        </h1>
        <input
          className="flex bg-blue-100 flex-col w-96 m-auto border-solid mt-5 border-2 border-black h-12 rounded-md flex-wrap"
          type="text"
          value={task}
          name="task"
          placeholder="Taskınızı giriniz..."
          onChange={handleChange}
        />
        <input
          className="flex bg-blue-100 flex-col w-96 m-auto border-solid border-2 border-black mt-3 h-12 rounded-md flex-wrap"
          type="number"
          value={workDay}
          name="workDay"
          placeholder="Kaç günde tamamlamalısınız."
          onChange={handleChange}
        />
        <button
          className="flex-col w-96 m-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center mt-3 flex-wrap"
          onClick={addNewTask}
        >
          Yeni Task ekle
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {todoList.map((task: todoType, index: number) => {
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}

export default TodoProjesi;
