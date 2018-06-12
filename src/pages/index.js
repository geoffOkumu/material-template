import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/header'
import Whitespace from '../components/whitespace'
import '../styles/pages/home.css'
import Paper from '@material-ui/core/Paper'
import ProfileImage from '../assets/photo.jpg'
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #d33c65 30%, #c73d62 90%)',
    borderRadius: 32,
    border: 0,
    color: 'white',
    height: 32,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #1a1a1a',
  }
};

const IndexPage = () => (
  <div>
    <div className='home-header'>
      <Header siteTitle='MT'/>
      <Whitespace height={150} />
      <div className='header-text'>
        <h1>Bring ideas to life</h1>
        <p>Hello, welcome to my website. I am Geoff Okumu, UI/UX designer + Front-end developer</p>
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
        </div>
      </Paper>
    </div>
  </div>
)

export default IndexPage
