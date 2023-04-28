/**
 * Searchbar component that redirects to archive with GET
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const SearchBar = () => {
   // Set these values by editing "siteMetadata" in gatsby-config.js
   const author = data.site.siteMetadata?.author
 
   return (
     <div className="bio">
       <StaticImage
         className="bio-avatar"
         layout="fixed"
         formats={["auto", "webp", "avif"]}
         src="../images/tituschu.jpg"
         width={50}
         height={50}
         quality={95}
         alt="Profile picture"
       />
       {author?.name && (
         <p>
           Written by <strong>{author.name}</strong> {author?.summary || null}
           {` `}
         </p>
       )}
     </div>
   )
 }
 
 export default SearchBar
 