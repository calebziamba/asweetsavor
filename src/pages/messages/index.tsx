import * as React from 'react'
import Layout from '../../components/layout'
import { PageProps, graphql } from 'gatsby'


const MessagesPage = ({ data }: PageProps<Queries.MessagesPageQuery>): JSX.Element => {
  return (
    <Layout title="My Blog Posts">
      {
        data.allMarkdownRemark.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const pageQuery = graphql`
  query MessagesPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          author
        }
      }
    }
  }
`

export default MessagesPage
