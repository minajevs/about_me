import * as React from 'react'
import styles from './main.module.scss'

export const Main: React.FC = ({ children }) => (
  <div className={styles.main}>
    {children}
  </div>
)

export default Main