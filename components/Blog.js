import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Blog({description, title, slug}) {
    return (
        <Link
            href={"/posts/" + slug}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {title} <span>-&gt;</span>
            </h2>
            <p>
              {description}
            </p>
          </Link>
    )
}

export default Blog
