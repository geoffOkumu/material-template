import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/content'

export const BlogPostTemplate = ({
  transition,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section style={transition && transition.style}>
      {helmet || ''}
      <div className="blog-post-container">
        <div>
          <div>
            <div className="blog-post--header">
              <div>
                {
                  tags.map((tag)=> 
                  <Link  className='blog-post--tags' key={tag} to={`/tags/${kebabCase(tag)}`}>
                    <span># {tag}</span>
                  </Link>)
                }
              </div>
              <h1>
                {title}
              </h1>
              <p className='blog-post--description'>{description}</p>
              <div className='blog-post--share'>
                <p>Posted on {date}</p>
              </div>
            </div>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
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
        description
        tags
      }
    }
  }
`
