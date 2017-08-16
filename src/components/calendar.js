import React from "react"
import moment from "moment"
import "./calendar.css"

// display a single day
const Day = ({ date, offset }) => {
  return (
    <div className="day">
      Day {offset} {date.format()}
    </div>
  )
}

// display `length` consecutive days in a div, starting from `basedate`
const Week = ({ basedate, index, length }) => {
  let days = Array(length).fill(0)
  return (
    <div className="week">
      Week {index}
      {days.map((_, ii) =>
        <Day date={basedate.clone().add(ii, "days")} offset={ii} />
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
    <div className="year">
      {days}
      {weeks.map((_, ii) =>
        <Week
          basedate={start.clone().add(ii, "weeks")}
          length={(ii + 1) * 7 < days ? 7 : days % 7}
          index={ii}
        />
      )}
    </div>
  )
}

export default Calendar
