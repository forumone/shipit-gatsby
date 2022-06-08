import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import ApplicationForm from '../components/application-form'
import Container from "../components/container";

import * as styles from './index.module.css';

const heroTitle = 'Our Team';
const heroContent = 'Forum One has deep and wide-reaching digital and sector-wide expertise, which we use to identify the best solutions for mission-driven organizations.';

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulEmployee.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          title={heroTitle}
        />
        <Container>
          <div className={styles.description}>
            {heroContent}
          </div>
        </Container>
        <ArticlePreview posts={posts} />
        <ApplicationForm />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulEmployee(
        sort: {order: ASC, fields: firstName}
    ) {
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
  }
`
