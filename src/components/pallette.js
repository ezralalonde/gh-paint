import React from "react"
import "./pallette.css"
import {shades} from "./data.js"

// each of the squares that represents a selectable colour
const Square = ({ shade, index, group }) => {
  return (
    <div className="square">
      <input
        id={`${group}${index}`}
        type="radio"
        name={group}
        value={shade}
        defaultChecked={index === 0} // first item is selected by default
      />
      <label
        id={`label${group}${index}`}
        htmlFor={`${group}${index}`}
        style={{ backgroundColor: shade }}
      />
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
      {Array(5)
        .fill(0)
        .map((_, ii) =>
          <Square group="colour" shade={shades[ii]} index={ii} />
        )}
      <Text>More</Text>
    </div>
  )
}

export default Pallette
