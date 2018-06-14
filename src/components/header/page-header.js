import React from 'react'
import Link from 'gatsby-link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import './index.css'

const PageHeader = ({ siteTitle }) => (
  <Paper square={true} style={{backgroundColor:'#ffffff'}}>
    <div className='nav-container page-nav'>
      <Grid container justify='space-between'>
        <Grid item>
          <h3 style={{ margin: 0 }}>
            <Link to="/">
              {siteTitle}
            </Link>
          </h3>
        </Grid>
        <Grid item style={{display:'inline-flex'}}>
          <p style={{ marginRight: 16 }}>
            <Link to="/blog">
              Blog
            </Link>
          </p>
          <p style={{ marginRight: 16 }}>
            <Link to="/about">
              About
            </Link>
          </p>
          <p>
            <Link to="/contact">
              Contact
            </Link>
          </p>
        </Grid>
      </Grid>
    </div>
  </Paper>
)

export default PageHeader
