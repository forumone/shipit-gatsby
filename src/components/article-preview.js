import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/team/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.photo?.gatsbyImageData}/>
                <h2 className={styles.title}>{post.firstName} {post.lastName}</h2>
                <div className={'job-title'}>
                  {post.jobTitle}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
