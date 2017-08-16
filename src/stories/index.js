import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import Calendar from "../components/calendar"
import Pallette from "../components/pallette"

import { Button, Welcome } from "@storybook/react/demo"

storiesOf("Welcome", module).add("to Storybook", () =>
  <Welcome showApp={linkTo("Button")} />
)

storiesOf("Button", module)
  .add("with text", () =>
    <Button onClick={action("clicked")}>Hello Button</Button>
  )
  .add("with some emoji", () =>
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  )

storiesOf("Calendar", module)
  .add("2016", () => <Calendar year="2016" />)
  .add("2015", () => <Calendar year="2015" />)
  .add("2014", () => <Calendar year="2014" />)
  .add("2013", () => <Calendar year="2013" />)
  .add("2012", () => <Calendar year="2012" />)
  .add("2011", () => <Calendar year="2011" />)
  .add("2010", () => <Calendar year="2010" />)
  .add("2009", () => <Calendar year="2009" />)
  .add("2008", () => <Calendar year="2008" />)

storiesOf("Pallette", module).add("Basic", () => <Pallette />)
