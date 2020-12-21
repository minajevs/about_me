import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Nullable } from 'src/utils/predicates'

import styles from './entry.module.scss'
import Link, { Links } from './link'

type Props = {
  title: string
  tags: string[]
  body: string
  links: Record<Links, Nullable<string>>
}


const Tag = ({ text }: { text: string }) =>
  <>
    #{text}
  </>

export const Entry = ({ title, tags, body, links }: Props) => {
  const tagsElement = tags.length === 0
    ? null
    : (<ul>
      {tags.map((tag, i) => <li key={i}><Tag text={tag} /></li>)}
    </ul>)

  return (
    <div className={styles.entry}>
      <h2>{title}</h2>
      {tagsElement}
      <MDXRenderer>{body}</MDXRenderer>
      <Link link={links.submission} type='submission' />
      <Link link={links.github} type='github' />
      <Link link={links.demo} type='demo' />
    </div>)
}

export const entryFragment = graphql`
  fragment Entry on Mdx {
    frontmatter {
      title
      tags
      github
      submission
      demo
    }
    body
    slug
  }
`

export default Entry