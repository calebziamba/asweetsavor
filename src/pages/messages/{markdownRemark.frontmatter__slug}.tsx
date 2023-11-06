import * as React from "react"
import { PageProps, graphql } from "gatsby"

type DataProps = {
  markdownRemark: {
    frontmatter: {
      date: string,
      title: string,
      slug: string,
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
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
