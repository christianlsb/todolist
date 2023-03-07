import React, { useState } from "react"
import { v4 as uuid } from "uuid"

import { Button } from "../../components"
import * as S from "./styles"

export default function Main() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState("")

  function inputChange(e) {
    setInput(e.target.value)
  }
  const AddNewTask = () => {
    setTask([...task, { id: uuid(), text: input }])
    console.log({ id: uuid(), text: input })
  }

  const DeleteTask = id => {
    const novList = task.filter(task => task.id !== id)

    setTask(novList)
  }

  return (
    <S.Container>
      <S.Title>TodoList</S.Title>

      <S.ContainerItens>
        <input onChange={inputChange} type={"text"} />
        <Button onClick={AddNewTask}>Added</Button>
      </S.ContainerItens>
      <S.ContainerTasks>
        {task && task.length > 0 ? (
          task.map(task => (
            <S.Task key={task.id}>
              {task.text}{" "}
              <button onClick={() => DeleteTask(task.id)}>Delete</button>
            </S.Task>
          ))
        ) : (
          <p style={{ color: "white" }}>No tasks added</p>
        )}
      </S.ContainerTasks>
    </S.Container>
  )
}
