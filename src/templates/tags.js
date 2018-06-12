import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

class TagRoute extends React.Component {
  render() {
    const {transition} = this.props
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(({node}) =>(
        <div key={node.id} className='blog-item'>
          <span>Posted on {node.frontmatter.date}</span>
          <Link to={node.fields.slug} className='blog-item--heading'>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.excerpt}</p>
          <div>
            {
              node.frontmatter.tags.map((tag)=> 
              <Link  className='blog-item--tags' key={tag} to={`/tags/${tag}`}>
                <span># {tag}</span>
              </Link>)
            }
          </div>
        </div>
      ))
    const tag = this.props.pathContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount

    return (
      <section style={transition && transition.style}>
        <Helmet title={`${tag} | ${title}`} />
        <div className='container'>
            <div style={{ marginBottom: '6rem' }}>
                <div>
                    <h1>{tag}({totalCount})</h1>
                </div>
                <p>
                <Link to="/tags/">Browse all tags</Link>
                </p>
                <div className="blog-container">{postLinks}</div>
            </div>
        </div>
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            tags
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
