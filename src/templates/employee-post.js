import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class EmployeePost extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulEmployee')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextDescription = documentToPlainTextString(
      JSON.parse(post.biography.raw)
    )
    const heading = post.firstName +' '+ post.lastName
    const jobtitle = post.jobTitle
    const plainTextBody = documentToPlainTextString(JSON.parse(post.biography.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody)

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          biography={plainTextDescription}
          image={`http:${post.photo2?.resize.src}`}
        />
        <Hero
          image={post.photo2?.gatsbyImageData}
          title={heading}
          content={post.title}
        />
        <div className={styles.container}>
          <span className={styles.meta}>
            {post.jobTitle}
          </span>
          <div className={styles.article}>
            <div className={styles.body}>
              {post.biography?.raw && renderRichText(post.biography)}
            </div>
            {post.favoriteIssues && (
                <>
                <h2>Favorite Issues:</h2>
                <Tags tags={post.favoriteIssues} />
                </>
                )}
            {post.surprisingFacts && (
                <>
                <h2>It may surprise you:</h2>
                <Tags tags={post.surprisingFacts} />
                </>
                )}
            {post.cantLiveWithout && (
                <>
                <h2>Can't live without:</h2>
                <Tags tags={post.cantLiveWithout} />
                </>
            )}
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/team/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/team/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default EmployeePost

export const pageQuery = graphql`
  query EmployeeBySlug(
    $slug: String!
    $previousEmpPostSlug: String
    $nextEmpPostSlug: String
  ) {
    contentfulEmployee(slug: { eq: $slug }) {
      slug
      jobTitle
      firstName
      lastName
      photo {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      photo2 {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      biography {
        raw
      }
      favoriteIssues
      surprisingFacts
      cantLiveWithout
      
    }
    previous: contentfulEmployee(slug: { eq: $previousEmpPostSlug }) {
      slug
      title
    }
    next: contentfulEmployee(slug: { eq: $nextEmpPostSlug }) {
      slug
      title
    }
  }
`
