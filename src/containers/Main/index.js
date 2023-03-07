import React from "react"

import { Button } from "../../components"
import * as S from "./styles"

export default function containers() {
  const AddNewTask = () => {
    console.log("New Task added")
  }
  return (
    <S.Container>
      <div>
        <S.Title>TodoList</S.Title>
        <Button onClick={AddNewTask}>Added</Button>
      </div>
    </S.Container>
  )
}
