import React from "react"
import "./pallette.css"

const Square = ({ shade }) => {
  return (
    <div className="square">
      {shade}
    </div>
  )
}

const Text = ({ children }) => {
  return (
    <div className="text">
      {children}
    </div>
  )
}

const Pallette = () => {
  return (
    <div className="pallette">
      <Text>Less</Text>
      {Array(5).fill(0).map((_, ii) => <Square shade={ii} />)}
      <Text>More</Text>
    </div>
  )
}

export default Pallette
