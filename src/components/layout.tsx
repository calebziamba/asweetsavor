import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar"
import "./layout.scss"

type LayoutProps = {
  title: string,
  children: any
}

const Layout = ({ title, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </React.Fragment>
  )
}

export default Layout

export const Head = () => (
  <>
    <title>title</title>
    <link rel="icon" href="static/favicon.ico" />
  </>
)
