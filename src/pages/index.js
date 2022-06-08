import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import ApplicationForm from '../components/application-form'

const heroTitle = 'Our Team';
// const heroContent = 'Forum One has deep and wide-reaching digital and sector-wide expertise, which we use to identify the best solutions for mission-driven organizations.';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulEmployee.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          title={heroTitle}
        />
        <ArticlePreview posts={posts} />
        <ApplicationForm />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulEmployee(sort: {order: ASC, fields: firstName}) {
      nodes {
        firstName
        lastName
        jobTitle
        photo {
          url
          gatsbyImageData(
            height: 424
            width: 424
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
        slug
        title
        department {
          id
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
