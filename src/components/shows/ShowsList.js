import React from 'react'

import ShowsItem from './ShowsItem'
const ShowsList = () => {
    return (
       <section className='shows'>
           <div className='container'>
               <div className='row py-2 justify-between'>
                   <div className='col-full'>
                       <div className='not-found'>shows not found</div>
                   </div>

                   <div className='col-1-5'>
                        <ShowsItem/>
                   </div>
               </div>
           </div>
    
       

       </section>
    )
}

export default ShowsList
