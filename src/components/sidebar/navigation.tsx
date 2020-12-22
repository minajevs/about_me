import React from "react"
import { graphql, Link } from "gatsby"

import styles from './navigation.module.scss'

const Navigation = () => (
  <div className={styles.navigation}>
    <ul>
      <li>
        <Link to="/" activeClassName={styles.active}>About</Link>
      </li>
      <li>
        <Link to="/portfolio" activeClassName={styles.active}>Portfolio</Link>
        <ul>
          <li>
            <Link to="/hackathons" activeClassName={styles.active}>Hackathons</Link>
          </li>
          <li>
            <Link to="/opensource" activeClassName={styles.active}>Open Source</Link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Navigation
