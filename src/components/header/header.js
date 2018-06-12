import React from 'react'
import Link from 'gatsby-link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import './index.css'

const Header = ({ siteTitle }) => (
  <Paper square={true} style={{backgroundColor:'#d33c65'}}>
    <div className='nav-container nav'>
      <Grid container justify='space-between'>
        <Grid item>
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              {siteTitle}
            </Link>
          </h1>
        </Grid>
        <Grid item>
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              {siteTitle}
            </Link>
          </h1>
        </Grid>
      </Grid>
    </div>
  </Paper>
)

export default Header
