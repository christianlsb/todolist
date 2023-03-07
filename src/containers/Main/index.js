import { yupResolver } from "@hookform/resolvers/yup"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FcApproval, FcEmptyTrash } from "react-icons/fc"
import { v4 as uuid } from "uuid"
import * as yup from "yup"

import { Button } from "../../components"
import * as S from "./styles"

export default function Main() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState("")

  const schema = yup
    .object({
      task: yup
        .string("A task deve ser um texto")
        .min(4, "A task deve conter no minimo 4 caracteres")
        .required("De um nome a task")
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {}

  function inputChange(e) {
    setInput(e.target.value)
  }
  const AddNewTask = () => {
    const taskSchema = schema.fields.task
    try {
      taskSchema.validateSync(input)
      setTask([...task, { id: uuid(), text: input }])
      setInput("")
    } catch (error) {
      console.log(error.message)
    }
  }

  const DeleteTask = id => {
    const novList = task.filter(task => task.id !== id)

    setTask(novList)
  }

  return (
    <S.Container>
      <S.Title>TodoList</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("task")} onChange={inputChange} type={"text"} />
        <Button onClick={AddNewTask}>Added</Button>
        {errors.task && <p style={{ color: "red" }}>{errors.task.message}</p>}
      </form>
      <S.ContainerTasks>
        {task && task.length > 0 ? (
          task.map(task => (
            <S.Task key={task.id}>
              <button>
                <FcApproval />
              </button>
              {task.text}
              <button onClick={() => DeleteTask(task.id)}>
                <FcEmptyTrash fontSize={18} />
              </button>
            </S.Task>
          ))
        ) : (
          <p style={{ color: "white" }}>No tasks added</p>
        )}
      </S.ContainerTasks>
    </S.Container>
  )
}
