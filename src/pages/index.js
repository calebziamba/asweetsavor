import * as React from "react"
import { graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'

const Home = ({ data, location }) => {
  
  const siteTitle = data.site.siteMetadata?.title || ``;
  const siteDescription = data.site.siteMetadata?.description || ``;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <div class="d-flex flex-column justify-content-center banner">
        <div class="container">
          <div class="text-center">
            <h6 class="text-light fw-bold">{siteDescription}</h6>
            <p class="text-light"><i>'"For we are unto God a sweet savor of Christ" - 2 Corinthians 2:15'</i></p>
          </div>
          <form class="row justify-content-center" method="post" action="<?php echo site_url('/archive') ?>" target="">
            <div class="form-group position-relative col-12 col-md-10 col-xl-8 col-xxl-7">
              <label for="searchMain" class="position-absolute text-dark" style={{color:"red", top: "0.5rem", left: "1.1rem"}}><FontAwesomeIcon icon={faMagnifyingGlass} /></label>
              <input id="searchMain" type="search" name="searchTerm" class="form-control ps-4" placeholder="Search" />
            </div>
          </form>
          <div class="text-center">
            <a href="/archive/read" class="btn btn-primary">Read</a>
            <a href="/archive/listen" class="btn btn-primary">Listen</a>
            <a href="/archive/watch" class="btn btn-primary">Watch</a>
            <a href="/topics" class="btn btn-outline-light">Browse by Topic</a>
          </div>
        </div>
        <StaticImage
          formats={["auto", "webp", "jpg"]}
          className=""
          src="../images/home-hero.webp"
          quality={95}
          alt="Flowers and fragrant oils"
        />
      </div>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title,
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
