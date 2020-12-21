import React from "react"
import Navigation from "./navigation"
import Personal from "./personal"
import Social from "./social"

type Props = {
  className?: string
}

const Sidebar = ({ className }: Props) => (
  <div className={className}>
    <Personal />
    <Social />
    <Navigation />
  </div>
)

export default Sidebar
