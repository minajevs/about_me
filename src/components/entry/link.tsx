import React from 'react'
import { isNullOrUndefined, Nullable } from 'src/utils/predicates'

import { FiGithub } from "@react-icons/all-files/fi/FiGithub"
import { FiBook } from "@react-icons/all-files/fi/FiBook"
import { FiPlayCircle } from "@react-icons/all-files/fi/FiPlayCircle"

import styles from './link.module.scss'


export type Links = 'submission' | 'github' | 'demo'

const linkIconMap: Record<Links, React.ReactNode> = {
  submission: <FiBook />,
  github: <FiGithub />,
  demo: <FiPlayCircle />,
}

export const Link = ({ link, type }: { link: Nullable<string>, type: Links }) => isNullOrUndefined(link)
  ? null
  : <a className={styles.link} target="_blank" rel="noopener noreferrer" href={link}>
    {linkIconMap[type]}{type}
  </a>

export default Link