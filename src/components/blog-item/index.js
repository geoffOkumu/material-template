import React from 'react'
import Link from 'gatsby-link'
import Grid from '@material-ui/core/Grid'

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
                <Grid item><img src={image}/></Grid>
                <Grid item>
                    <span className="blog-item--category">{category}</span>
                    <Link to={slug}>
                        <h3>{title}</h3>
                    </Link>
                    <p>{excerpt}</p>
                    <span className="blog-item--date">{date}</span>
                </Grid>
            </Grid>
        </div>
    )
}