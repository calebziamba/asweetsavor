import * as React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../../components/layout"

type DataProps = {
  markdownRemark: {
    frontmatter: {
      date: string,
      title: string,
      slug: string,
      author: string,
    },
    html: TrustedHTML,
  }
}

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: PageProps<DataProps>) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.title}>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <h2>{frontmatter.author}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
      }
    }
  }
`
