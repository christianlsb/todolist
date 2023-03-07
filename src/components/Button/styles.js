import styled from "styled-components"

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: green;
    color: white;
    transition: 3s;
  }
`
