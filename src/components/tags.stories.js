import React from "react"
import Tags from "./tags"
const demoTags = [
  'Tag Name One',
  'Tag Name Two',
  'Tag Name Three',
];

export default {
  component: Tags,
  title: "Components/Tags",
}

const Template = args => <Tags {...args} />

export const Default = Template.bind({})
Default.args = {
  tags: demoTags,
}