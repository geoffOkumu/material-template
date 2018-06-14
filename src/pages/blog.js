import React from 'react'
import Header from '../components/header/page-header'
import Whitespace from '../components/whitespace'
import BlogItem from '../components/blog-item'
import Link from 'gatsby-link'
import '../styles/pages/blog.css'

export default class Blog extends React.Component{
    render(){
        const {transition} = this.props
        const posts = this.props.data.allMarkdownRemark.edges
        const group = this.props.data.allMarkdownRemark.group
        const latestPost = posts[0].node

        return(
            <div style={transition && transition.style}>
                <Header siteTitle='MT'/>
                <div style={{backgroundImage: `url(${latestPost.frontmatter.thumbnail})`}}>
                    <div className='blog-header'>
                        <div className='blog-header__post'>
                            <Whitespace height={140}/>
                            <p>LATEST</p>
                            <Link to={latestPost.fields.slug}>
                                <h2>{latestPost.frontmatter.title}</h2>
                            </Link>
                            <p>Posted on {latestPost.frontmatter.date} in <Link to={`/topic/${latestPost.frontmatter.category}`}># {latestPost.frontmatter.category}</Link></p>
                        </div>
                    </div>
                </div>
                <div>
                    <Whitespace height={50}/>
                    <div>
                        {group.map((category) =>(
                            <div style={{backgroundImage: `url(${category.edges[0].node.frontmatter.thumbnail})`}}>
                                {category.fieldValue}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        group(field: frontmatter___category) {
            fieldValue
            totalCount
            edges {
                node {
                    frontmatter {
                        thumbnail
                    }
                }
            }
            }
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
            thumbnail
            category
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`