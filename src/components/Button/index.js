import PropTypes from "prop-types"
import React from "react"

import * as S from "./styles"
export const Button = ({ children, ...props }) => (
  <S.Button {...props}>{children}</S.Button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired
}
