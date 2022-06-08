import React from "react"
import Navigation from "./navigation"

export default {
  component: Navigation,
  title: "Components/Navigation",
}

const Template = args => <Navigation {...args} />

export const Default = Template.bind({})
