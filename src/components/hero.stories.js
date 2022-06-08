import React from "react"
import Hero from "./hero"

export default {
  component: Hero,
  title: "Components/Hero",
}

const Template = args => <Hero {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "Title of the hero",
}