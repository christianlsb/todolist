import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 120vh;
  background-color: #4a5568;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  input {
    width: 250px;
    height: 43px;
    padding-left: 12px;
    outline: none;
    border-radius: 5px;
    border: none;
    -webkit-box-shadow: 10px 10px 7px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 7px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 7px -8px rgba(0, 0, 0, 0.75);
    margin-right: 15px;
  }
`
export const Title = styled.h1`
  color: white;
  margin: 25px 0;
`
export const Task = styled.div`
  display: flex;
  width: 340px;
  height: 43px;
  background-color: white;
  margin-top: 10px;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  font-size: 1rem;
  &.finished {
    color: gray;
    text-decoration: line-through;
  }
`
export const ContainerTasks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid #edf2f7;
  width: 60px;
  height: 25px;
  background-color: transparent;
  border-radius: 5px;
  &:hover {
    background-color: purple;
    color: white;
    transition: 2s;
  }
`

export const CheckedButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid #edf2f7;
  width: 60px;
  height: 25px;
  background-color: transparent;
  border-radius: 5px;
  &:hover {
    background-color: green;
    color: white;
    transition: 2s;
  }
`
