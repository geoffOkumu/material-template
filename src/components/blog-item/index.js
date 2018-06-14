import React from 'react'
import Link from 'gatsby-link'
import Grid from '@material-ui/core/Grid'
import './index.css'

export default ({
    date,
    slug,
    title,
    excerpt,
    category,
    image
}) => {
    return(
        <div className='blog-item'>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <Link to={slug}>
                        <h3>{title}</h3>
                    </Link>
                    <div className='blog-item--meta'>
                        <span className="blog-item--date">Posted on {date}</span>
                        <span className="blog-item--category"> in <Link to={`/topic/${category}`}>#{category.toUpperCase()}</Link></span>
                    </div>
                </Grid>
                <Grid item md={12} xs={12}><img src={image}/></Grid>
                <Grid item md={12} xs={12}>
                    <p>{excerpt}</p>
                </Grid>
            </Grid>
        </div>
    )
}