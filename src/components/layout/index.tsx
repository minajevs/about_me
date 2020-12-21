import React from "react"

import Sidebar from "src/components/sidebar"
import SEO, { Props as SEOProps } from "./seo"

import styles from "./layout.module.scss"
import Main from "../main"
import LayoutBase from "./base"

type Props = {} & SEOProps

const Layout: React.FC<Props> = ({ children, ...seoProps }) => (
  <>
    <LayoutBase {...seoProps}>
      <div className={styles.left}>
        <Sidebar className={styles.sidebar} />
      </div>
      <main className={styles.right}>
        <Main>
          {children}
        </Main>
      </main>
    </LayoutBase>
  </>
)

export default Layout
