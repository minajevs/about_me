import React from "react"

import Sidebar from "src/components/sidebar"
import SEO, { Props as SEOProps } from "./seo"

import styles from "./layout.module.scss"
import Main from "../main"

type Props = {} & SEOProps

const Layout: React.FC<Props> = ({ children, ...seoProps }) => {
  return (
    <>
      <SEO {...seoProps} />
      <div className={styles.layout}>
        <div className={styles.left}>
          <Sidebar />
        </div>
        <main className={styles.right}>
          <Main>
            {children}
          </Main>
        </main>
      </div>
    </>
  )
}

export default Layout
