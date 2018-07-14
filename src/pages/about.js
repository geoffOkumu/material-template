import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header/page-header'

const SecondPage = () => (
  <div>
    <Header siteTitle='MT'/>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
