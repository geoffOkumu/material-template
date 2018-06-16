import React from 'react'
import Header from '../components/header/page-header'
import Whitespace from '../components/whitespace'
import BlogItem from '../components/blog-item'
import ChevronDown from '../assets/chevron-down.svg'
import Link from 'gatsby-link'
import '../styles/pages/blog.css'

export default class Blog extends React.Component{
    render(){
        const {transition} = this.props
        const posts = this.props.data.allMarkdownRemark.edges
        const group = this.props.data.allMarkdownRemark.group
        const latestPost = posts[0].node
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

        return(
            <div style={transition && transition.style}>
                <Header/>
                <div style={{backgroundImage: `url(${latestPost.frontmatter.thumbnail})`}}>
                    <div className='blog-header'>
                        <div className='blog-header__post'>
                            <Whitespace height={100}/>
                            <h1>All posts</h1>
                        </div>
                    </div>
                </div>
                <Whitespace height={40}/>
                <div className='posts-container'>
                    {postLinks}
                </div>
                <div className='categories-container' id='#topics'>
                    <Whitespace height={80} />
                    <p>Select topic for more posts</p>
                    <img src={ChevronDown} alt='arrow-down'/>
                    <Whitespace height={20}/>
                    <div className='categories-items__container'>
                        {group.map((category) =>(
                            <div className='categories-items' lg={3} key={category.fieldValue}>
                                <Link to={`/topic/${category.fieldValue}`} className='blog-category'>
                                    # {category.fieldValue}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <Whitespace/>
                <div className='newsletter-container'></div>
            </div>
        )
    }
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(limit: 10 sort: {fields: [frontmatter___date], order: DESC}) {
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