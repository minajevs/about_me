import React from "react"

import Sidebar from "src/components/sidebar"
import { Props as SEOProps } from "./seo"

import styles from "./layout.module.scss"
import Main from "../main"
import LayoutBase from "./base"

type Props = {} & SEOProps

const SingleColumnLayout: React.FC<Props> = ({ children, ...seoProps }) => (
  <>
    <LayoutBase {...seoProps}>
      <main className={styles.singleColumn}>
        {children}
      </main>
    </LayoutBase>
  </>
)

export default SingleColumnLayout
