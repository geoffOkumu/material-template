import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/page-header'
import Grid from '@material-ui/core/Grid'
import Whitespace from '../components/whitespace'
import Divider from '@material-ui/core/Divider'
import arrowRight from '../assets/arrow-right.svg'
import arrowRightWhite from '../assets/arrow-right-white.svg'
import '../styles/pages/contact.css'

const ContactPage = () => (
  <div>
    <Header/>
    <Whitespace/>
    <div className='contact-container'>
      <h1>Lets chat</h1>
      <Whitespace height={50}/>
      <Grid container>
        <Grid item xs={6}>
          <a href='mailto:austoe6@gmail.com' className='contact-link'>
            <div className='contact-item blue-bg'>
              <span>Email Me</span>
              <img src={arrowRightWhite} alt='arrow-right'/>
            </div>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a href='https://twitter.com/Austoe6' target='_blank' className='contact-link'>
            <div className='contact-item grey-bg'>
              <span>Twitter</span>
              <img src={arrowRight} alt='arrow-right'/>
            </div>
          </a>
        </Grid>
      </Grid>
    </div>
  </div>
)

export default ContactPage
