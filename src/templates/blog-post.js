import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Whitespace from '../components/whitespace'
import Header from '../components/header/page-header'
import '../styles/pages/blog-post.css'

export const BlogPostTemplate = ({
  transition,
  category,
  title,
  helmet,
  date,
  thumbnail,
  html
}) => {

  return (
    <section style={transition && transition.style} className='blog-page'>
      {helmet || ''}
      <Header siteTitle='MT'/>
      <div >
        <div>
          <img src={thumbnail} alt='featured img' className='blog-post__featured-img'/>
          <Whitespace height={40}/>
          <div className="blog-post-container">
            <div className="blog-post__header">
              <h1>
                {title}
              </h1>
              <div className='blog-post__meta'>
                <p>Posted on {date} in <Link to={`/topic/${category}`}>#{category}</Link></p>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      thumbnail={post.frontmatter.thumbnail}
      html={post.html}
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      category={post.frontmatter.category}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail
        description
        category
      }
    }
  }
`
