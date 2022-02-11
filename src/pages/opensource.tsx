import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import { OpensourcePageQuery } from "autogenerated/graphql-types"
import Entries from "src/components/entries"

const OpensourcePage = ({ data }: PageProps<OpensourcePageQuery>) => (
  <Layout title="Open Source">
    <Entries entries={data.allMdx.nodes} />
  </Layout>
)

export const query = graphql`
  query OpensourcePage {
    allMdx(
      filter: {frontmatter: {tags: {regex: "/.*opensource.*/"}}},
      sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          ...Entry
        }
    }
  }
`

export default OpensourcePage