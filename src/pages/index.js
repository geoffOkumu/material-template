import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/header'
import Whitespace from '../components/whitespace'
import '../styles/pages/home.css'
import Paper from '@material-ui/core/Paper'
import ProfileImage from '../assets/photo.jpg'
import Button from '@material-ui/core/Button';
import BlogItem from '../components/blog-item';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #d33c65 30%, #c73d62 90%)',
    borderRadius: 32,
    border: 0,
    color: 'white',
    height: 32,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #1a1a1a',
  },
};

const IndexPage = ({data, transition}) => (
  <div style={transition && transition.style} className='home-body'>
    <div className='home-header'>
      <Header siteTitle='TechGenius'/>
      <Whitespace height={150} />
      <div className='header-text'>
        <h1>All about Tech</h1>
        <p>Hello, welcome to my website. I am Austin Okhala, techgenius</p>
      </div>
      <Whitespace height={150} />
    </div>
    <div className='body-section'>
      <Paper style={{backgroundColor: '#0e0e0ebd'}}>
        <div className='about-section'>
          <Whitespace height={60}/>
          <h3>ABOUT ME</h3>
          <Whitespace height={30}/>
          <img src={ProfileImage} alt='profile img'/>
          <h4>Geoff Okumu</h4>
          <span>Nairobi, Kenya</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis maiores animi minima corrupti autem delectus possimus neque quis iure eos accusamus deserunt iusto molestiae, placeat fugit, eaque hic facere dicta?</p>
          <Whitespace height={30}/>
          <Button style={styles.button}>CONTACT</Button>
          <Whitespace height={70}/>
        </div>
        <div className="blog-section">
          <h3>BLOG</h3>
          <div>
            {
              data.allMarkdownRemark.edges.map(({node}) =>(
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
            }
          </div>
          <Whitespace height={20}/>
            <Link to='/blog' style={{textDecoration: 'none'}}>
              <Button variant="outlined">
                Load more
              </Button>
            </Link>
          <Whitespace height={30}/>
        </div>
          <Whitespace height={200}/>
      </Paper>
    </div>
    <div>
      <Whitespace/>
      <div className='home-footer'>
        &copy; Copyright 2018
      </div>
      <Whitespace height={80}/>
    </div>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 3 sort: {fields: [frontmatter___date], order: DESC}) {
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
