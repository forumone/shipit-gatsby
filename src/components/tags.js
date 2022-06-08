import React from 'react'

import * as styles from './tags.module.css'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  )

export default Tags
