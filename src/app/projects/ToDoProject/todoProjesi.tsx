import React, { ChangeEvent, useEffect } from "react";
import { useState } from "react";
import { todoType } from "./appTypes";
import { TodoItem } from "./TodoItem";
import Axios from "axios";

const BASE_URL = "http://localhost:3001";

function TodoProjesi() {
  const [todo, setTodo] = useState({ taskName: "", workDay: 0 });
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<todoType[]>([]);
  const [refresh, setRefresh] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      const newTodo = { ...todo, taskName: event.target.value };
      setTodo(newTodo);
      setTask(event.target.value);
    } else {
      const newTodo = { ...todo, workDay: Number(event.target.value) };
      setTodo(newTodo);
      setWorkDay(Number(event.target.value));
    }
  };
  const addNewTask = async () => {
    console.log("todo", todo);
    const apiUrl = BASE_URL + "/task";
    const newTask = { taskName: task, workDay: workDay };
    const response = await Axios.post(apiUrl, newTask);
    console.log("Response:", response.data);
    setTodo({ taskName: "", workDay: 0 });
    setTask("");
    setWorkDay(0);
    setRefresh(!refresh);
  };

  // ^^^^^^^^^^^^^^^^^^^^^^^^^
  // kodun burasında sorun var

  const deleteTask = async (deleteTask: todoType): Promise<void> => {
    await Axios.delete(BASE_URL + "/task/" + deleteTask.id);
    setRefresh(!refresh);
    //getTodos()
  };
  const getTodos = () => {
    Axios.get(`${BASE_URL}/task`)
      .then((res) => setTodoList(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(getTodos, [refresh]);
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

// json-server --watch Api/db.json --port 5000
