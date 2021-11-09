import React from 'react'
import { Link } from 'react-router-dom'

const ShowsItem = () => {
    return (
        <Link to={`/shows/1`} className='show-item'>
            <div className='show-item_img'>
                <img src='' alt='show img'/>
                <div className='show-item_img-hover'>
                    <div className='rating'>
                        <span>&#11088;</span>7.5
                    </div>
                    <h3 className='title'>Show Title</h3>
                </div>
            </div>
        </Link>
    )
}

export default ShowsItem
