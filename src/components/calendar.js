import React from "react"

const Day = ({ date }) => {
  return (
    <div>
      {date}
    </div>
  )
}

// a 53x7 grid, represting the calendar year, YYYY.
// the first visible date is the first sunday <= YYYY-jan-01
// the last visible date is *always* YYYY-dec-31
const Calendar = ({ year }) => {
  return (
    <div>
      {year}
    </div>
  )
}

export default Calendar
