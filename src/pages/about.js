import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/page-header'
import Grid from '@material-ui/core/Grid'
import Whitespace from '../components/whitespace'
import profileImg from '../assets/pic.jpg'
import '../styles/pages/about.css'
import Divider from '@material-ui/core/Divider'
import SocialIcons from '../components/social-icons'

const SecondPage = () => (
  <div>
    <Header />
    <Whitespace height={30}/>
    <div className='about-container'>
      <Grid container>
        <Grid item lg={6} sm={12}>
          <div className='about-image'>
            <img src={profileImg} alt='profile-img'/>
          </div>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div className='about-header__title'>
            <h3>Austin Okhala</h3>
          </div>
        </Grid>
      </Grid>
      <Divider/>
      <Grid container>
        <Grid item lg={6} sm={12}>
          <SocialIcons/>
        </Grid>
        <Grid item lg={6} sm={12}>
          <div className='about-body'>
          <Whitespace height={40}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae molestiae nostrum doloribus suscipit sunt placeat quas amet autem eius! Ad, dolorem sed culpa voluptatem placeat asperiores nulla blanditiis labore eveniet ipsa tempora totam ex quis ab id eius? Reprehenderit!</p>
          </div>
        </Grid>
      </Grid>
    </div>
    <Whitespace/>
    <div className='footer'>
      <Divider/>
      <div className='footer__text'>
      &copy; Copyright 2018
      </div>
    </div>
  </div>
)

export default SecondPage
