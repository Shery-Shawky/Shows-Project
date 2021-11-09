import React, { useState } from 'react'

import homeBg from '../../assets/images/home-bg.jpg'
const Search = (props) => {
    const [searchInput,setSearchInput]=useState('')
    const styleClasses=
    props.size==='large'
    ?'col-2-4 search-content mx-auto mh-100'
    :'col-2-4 search-content mx-auto pt-6 pb-2'
    return (
       <section className='search' style={{background: `url(${homeBg})`}}>
           <div className='container'>
               <div className='row'>
                   <div className={styleClasses}>
                       {props.size==='large'?
                        <>
                        <h1>Find your next show</h1>
                        <p>gggggggggggggggggg</p>
                        </> :null }
                       <form className='search-form'>
                           <input 
                           type='search' 
                           placeholder='search for tv show'
                           value={searchInput}
                           onChange={(e)=>setSearchInput(e.target.value)}
                           />
                           <button type='submit' className='btn btn-primary'>Search</button>
                       </form>

                   </div>
               </div>
           </div>
       </section>
    )
}

export default Search
