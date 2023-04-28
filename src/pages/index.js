import * as React from "react"
import { graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import MediaFilter from "../components/MediaFilter"
import ReadingLogo from "../images/papers.svg"
import ListeningLogo from "../images/headphones.svg"
import WatchLogo from "../images/youtube.svg"

import { Col, Container, Row } from "react-bootstrap"
import SearchBar from "../components/SearchBar"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || ``
  const siteDescription = data.site.siteMetadata?.description || ``

  return (
    <Layout location={location} title={siteTitle}>
      <div class="banner mb-3">
        <Container>
          <div class="text-center">
            <h1 className="text-light">{siteTitle}</h1>
            <h6 class="text-light fw-bold">{siteDescription}</h6>
            <p class="text-light">
              <i>
                '"For we are unto God a sweet savor of Christ" - 2 Corinthians
                2:15'
              </i>
            </p>
          </div>
          <SearchBar />
        </Container>
        <StaticImage
          formats={["auto", "webp", "jpg"]}
          className=""
          src="../images/home-hero.webp"
          quality={95}
          alt="Flowers and fragrant oils"
        />
      </div>

      <Container>
        <Row className="g-2">
          <Col sm={4}>
            <MediaFilter
              image={ReadingLogo}
              alt="document"
              title="READ"
              href="#read"
            />
          </Col>
          <Col sm={4}>
            <MediaFilter
              image={ListeningLogo}
              alt="headphones"
              title="LISTEN"
              href="#listen"
            />
          </Col>
          <Col sm={4}>
            <MediaFilter
              image={WatchLogo}
              alt="YouTube logo"
              title="WATCH"
              href="https://www.youtube.com/@ASweetSavor"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
