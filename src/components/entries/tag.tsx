import React from 'react'
import { Link } from "gatsby";
import { foldNullables } from "src/utils/functional";
import { ret } from "src/utils/pointfree";

const tagToUrlMapping: Record<string, string> = {
  'opensource': '/opensource',
  'hackathon': '/hackathons'
}

type Props = {
  text: string
}

export const Tag = ({ text }: Props) => foldNullables(
  { url: tagToUrlMapping[text] },
  ret(<>#{text}</>),
  ({ url }) => <Link to={url}>
    #{text}
  </Link>
)

export default Tag