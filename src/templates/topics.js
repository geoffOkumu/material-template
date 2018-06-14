import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import BlogItem from '../components/blog-item'
import Header from '../components/header/page-header'
import Whitespace from '../components/whitespace'
import '../styles/pages/topics.css'

class TopicPage extends React.Component {
  render() {
    const {transition} = this.props
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(({node}) =>(
        <div key={node.id} className='blog-items-container'>
            <BlogItem
                date={node.frontmatter.date}
                image={node.frontmatter.thumbnail}
                category={node.frontmatter.category}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                slug={node.fields.slug}
            />
        </div>
      ))
    const category = this.props.pathContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount

    return (
      <section style={transition && transition.style}>
        <Helmet title={`${category} | ${title}`} />
        <Header siteTitle={title}/>
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{backgroundImage: `url(${posts[0].node.frontmatter.thumbnail})`}}>
              <div className='topics-header'>
                <div className='topics-header__text'>
                  <Whitespace/>
                  <h1>{category}({totalCount})</h1>
                  <p>
                    <Link to="/blog">Show all topics</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="blog-section">
            <div className='topics-container'/>
              <div className='topics-container'>
                {postLinks}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TopicPage

export const topicPageQuery = graphql`
  query TopicPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
            category
            thumbnail
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
