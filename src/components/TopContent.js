import React from 'react'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='container-content'>
            <h1>Mrs.Borgiya Mary</h1>
            <p>A Professional Web and App Developer</p>
            <a href='www.google.com'>
                <button className='downloadButton'>Download</button>
            </a>
        </div>
    </div>
  )
}

export default TopContent