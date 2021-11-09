import React from 'react'

const Shows = () => {
    return (
        <section className='show'>
           <div className='container'>
               <div className='row'>
                    <div className='col-full'>
                        <div className='not-found'>shows not found</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-1-4'>
                        <div className='show-img'>
                            <img src='' alt='show title'/>
                        </div>
                    </div>
                    <div className='col-3-4'>
                        <div className='show-info'>
                            <h1 className='mb-2'>show full title</h1>
                            <div className='show-info_type mb-2'>
                                <span className='badge'>Comedy</span>
                                <span className='badge'>Drama</span>
                            </div>
                            <div className='show-info_status mb-1'>
                                <strong>Status :</strong>Running
                            </div>  
                            <div className='show-info_rating mb-1'>
                                <strong>Rating :</strong>7.5
                            </div>
                            <div className='show-info_site mb-1'>
                                <a href='#' target='_blank'>
                                <strong>Official Site</strong>
                                </a>
                            </div> 
                            <div className='show-info_about flex'>
                                <strong>Story :</strong>
                                <p>lorem15 dhhdhdhdhdhdhdhdhdhdhdhdhdhdhhdhdh</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
           </div> 
        </section>
    )
}

export default Shows
