import React from 'react'

import Search from '../components/search/Search'
import ShowsList from '../components/shows/ShowsList'
const SearchPage = () => {
    return (
       <>
       <Search size='small'/>
       <ShowsList/>
       </>
    )
}

export default SearchPage
