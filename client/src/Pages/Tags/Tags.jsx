import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Tags.css'
import TagsList from './TagsList'
import {tagList} from './tagList'

const Tags = () => {
  return (
    <div className='home-container-1'>
        <LeftSidebar/>
    <div className='home-container-2'>
    <h1 className="tags-h1">Tags</h1>
    <p className="tags-p"> A tag is a word that categorizes your question with similar questions</p>
    <p className="tags-p">Using the right tags makes it easier for others to find and answer your question. </p>
    
    <div className='tags-list-container'>
    {tagList.map((tag, index) => (
            <TagsList tag={tag} key={index} />
          ))}  
           </div>

    </div>  
    </div>
  )
}

export default Tags
