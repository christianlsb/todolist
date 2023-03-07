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
      setTask([...task, { id: uuid(), text: input, finished: false }])
    } catch (error) {
      console.log(error.message)
    }
  }
  const CheckedTesk = id => {
    const newListTask = task.map(task =>
      task.id === id ? { ...task, finished: !task.finished } : task
    )

    setTask(newListTask)
  }
  const DeleteTask = id => {
    const novListTask = task.filter(task => task.id !== id)

    setTask(novListTask)
  }

  return (
    <S.Container>
      <S.Title>TodoList</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("task")}
          onChange={inputChange}
          type={"text"}
          placeholder={"enter your task..."}
        />
        <Button onClick={AddNewTask}>Added</Button>
        {errors.task && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {errors.task.message}
          </p>
        )}
      </form>
      <S.ContainerTasks>
        {task && task.length > 0 ? (
          task.map(task => (
            <S.Task key={task.id} className={task.finished ? "finished" : ""}>
              <S.CheckedButton onClick={() => CheckedTesk(task.id)}>
                <FcApproval />
              </S.CheckedButton>
              {task.text}
              <S.DeleteButton onClick={() => DeleteTask(task.id)}>
                <FcEmptyTrash fontSize={18} />
              </S.DeleteButton>
            </S.Task>
          ))
        ) : (
          <p style={{ color: "white" }}>No tasks added</p>
        )}
      </S.ContainerTasks>
    </S.Container>
  )
}
