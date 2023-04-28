import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import NavBar from "./NavBar"
import "./layout.scss"
import Seo from "../components/seo"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <React.Fragment>
    <Seo title="All posts" />

    <NavBar></NavBar>
    <div data-is-root-path={isRootPath}>
      
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
    </React.Fragment>
  )
}

export default Layout
