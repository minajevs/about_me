import React from "react"
import SEO, { Props as SEOProps } from "./seo"

import styles from "./layout.module.scss"

type Props = {} & SEOProps

const LayoutBase: React.FC<Props> = ({ children, ...seoProps }) => (
  <>
    <SEO {...seoProps} />
    <div className={styles.layout}>
      {children}
    </div>
  </>
)

export default LayoutBase
