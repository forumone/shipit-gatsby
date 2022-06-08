import React from "react"
import Container from "./container"

export default {
  component: Container,
  title: "Components/Container",
}

const Template = args => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
  tag: 'div',
  children: "This is some content! It's in a container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu libero rhoncus, aliquet nulla sit amet, scelerisque velit. Duis sit amet ultrices purus, vitae fermentum orci. Sed lectus ligula, malesuada id accumsan vitae, efficitur vitae turpis. Sed in lectus interdum tellus lacinia rhoncus a quis dui. Nullam sit amet egestas leo, ut convallis nisi. Nunc elementum dignissim nulla, at pulvinar tortor convallis sed. Integer hendrerit turpis velit, sed mollis quam ullamcorper sit amet. Fusce semper elementum auctor. Nullam at mollis sem, porttitor ornare arcu. Praesent faucibus justo diam, non facilisis diam sagittis maximus. Phasellus quis eros ut lacus aliquet blandit convallis eu urna. Donec dignissim leo ac risus vulputate vehicula. Suspendisse potenti. Morbi sit amet semper nulla, at facilisis urna. Aliquam vestibulum faucibus vulputate. Sed efficitur laoreet faucibus. Aliquam fermentum ex turpis, et faucibus purus convallis sed. Cras viverra accumsan tortor. Sed nec felis lobortis, sodales augue vel, semper enim. Ut hendrerit nec libero imperdiet hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse in turpis ullamcorper, laoreet nisi a, dictum urna. Proin quis interdum sapien. Cras sagittis tortor sed porttitor luctus. Fusce et posuere velit, in feugiat magna. Sed commodo risus non ullamcorper fringilla. Phasellus elementum hendrerit elit, eget scelerisque velit faucibus et. Proin ullamcorper tempus diam, eu placerat dui faucibus in. Proin neque mauris, euismod non finibus vel, sollicitudin in elit.Vestibulum imperdiet lectus magna, eu imperdiet mauris gravida ut. Proin suscipit lectus ut mi ultrices, nec molestie orci consectetur. Sed ac fermentum enim, quis ullamcorper massa. Aenean sit amet interdum elit, semper eleifend augue. Maecenas at orci interdum, sagittis nibh eu, feugiat mauris. Nunc non libero orci. Ut molestie dui vitae molestie laoreet. Sed id convallis urna, nec accumsan lectus. Sed nec nunc id ex aliquam mattis. Vestibulum nisl leo, aliquam in pulvinar in, suscipit vel nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce dapibus magna ut augue ultricies ultricies."
}