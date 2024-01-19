"use client";

import { APICALLSCREEN } from "./projects/ApiCall";
import TodoProjesi from "./projects/ToDoProject/todoProjesi";

export default function Home() {
  return (
    <>
      <TodoProjesi />
      <APICALLSCREEN/>
    </>
  );
}
