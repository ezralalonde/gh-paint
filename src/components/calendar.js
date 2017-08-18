import React from "react"
import moment from "moment"
import "./calendar.css"
import { shades } from "./data.js"

let canDragToPaint = false
let paintColor = 2

const allowDragToPaint = event => {
  event.preventDefault()
  canDragToPaint = true
}

const blockDragToPaint = () => {
  canDragToPaint = false
}

// display a single day
class Day extends React.PureComponent {
  state = {
    color: this.props.color
  }

  // change day's color
  paint = color => {
    this.setState({ color: color })
  }

  dragPaint = color => {
    if (canDragToPaint) {
      this.paint(color)
      console.log(`painted ${this.props.date.format("YYYY-MMM-DD")}`)
    }
  }

  render() {
    const { date } = this.props
    return (
      <div
        className="day"
        onMouseOver={() => this.dragPaint(paintColor)}
        onMouseDown={() => this.paint(paintColor)}
        style={{ backgroundColor: shades[this.state.color] }}
      />
    )
  }
}

// display `length` consecutive days in a div, starting from `basedate`
const Week = ({ basedate, length }) => {
  let days = Array(length).fill(0)
  return (
    <div className="week">
      {days.map((_, ii) =>
        <Day key={ii} date={basedate.clone().add(ii, "days")} color={0} />
      )}
    </div>
  )
}

// a ~53x7 grid, represting the calendar year, YYYY.
// the first visible date is the first sunday <= YYYY-jan-01
// the last visible date is *always* YYYY-dec-31
const Calendar = ({ year }) => {
  const end = moment(`${year}-dec-31`, "YYYY-MMM-DD")
  const start = end.clone().subtract(1, "year").weekday(0)
  let days = end.diff(start, "days") + 1
  let weeks = Array(Math.ceil(days / 7)).fill(0)
  return (
    <div
      className="year"
      key={year}
      onMouseLeave={blockDragToPaint}
      onMouseDown={ee => allowDragToPaint(ee)}
      onMouseUp={blockDragToPaint}
    >
      {days}
      {weeks.map((_, ii) =>
        <Week
          key={ii}
          basedate={start.clone().add(ii, "weeks")}
          length={(ii + 1) * 7 <= days ? 7 : days % 7}
        />
      )}
    </div>
  )
}

export default Calendar
