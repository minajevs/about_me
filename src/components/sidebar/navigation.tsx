import React from "react"
import { Link } from "gatsby"

import styles from './navigation.module.scss'

const Navigation = () => (
  <div className={styles.navigation}>
    <ul>
      <li>
        <Link to="/" activeClassName={styles.active}>About</Link>
      </li>
      <li>
        <Link to="/portfolio" activeClassName={styles.active}>Portfolio</Link>
      </li>
    </ul>
  </div>
)

export default Navigation
