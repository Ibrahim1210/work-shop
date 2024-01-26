import { todoType } from "./appTypes";

type PropsType = {
  task: todoType;
  deleteTask(task:todoType ): void;
};

export function TodoItem({ task, deleteTask }: PropsType) {
  console.log(task);
  return (
    <div className="w-96 border border-gray-500 rounded-lg text-center p-10 m-3">
      <div className="">
        <p className="">{task.taskName}</p>
        <p className="">{task.workDay}</p>
        <button
          className=" border border-gray-500 p-2 bg-teal-600 rounded-md pr-6 pl-6 mt-5 "
          onClick={() => deleteTask(task)}
        >
          Sil
        </button>
      </div>
    </div>
  );
}
