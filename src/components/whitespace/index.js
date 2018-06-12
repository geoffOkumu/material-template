import React from 'react'

const Whitespace = (props) =>{
    const styles ={
        height: props.height || 100,
        width: '100%'
    }

    return(
        <div style={styles}></div>
    )
}

export default Whitespace