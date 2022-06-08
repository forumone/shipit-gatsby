import React from "react"
import Footer from "./footer"
import * as styles from './footer.module.css'

export default {
  component: Footer,
  title: "Components/Footer",
}

const Template = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
}