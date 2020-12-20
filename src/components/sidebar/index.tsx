import React from "react"
import Personal from "./personal"
import Social from "./social"
import styles from './sidebar.module.scss'

const Sidebar = () => (
  <div className={styles.sidebar}>
    <Personal />
    <Social />
  </div>
)

export default Sidebar
