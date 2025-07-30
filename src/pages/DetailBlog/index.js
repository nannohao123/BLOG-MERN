import React from 'react'
import { LoginBG } from '../../assets'
import './detailblog.scss'

function DetailBlog() {
  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={LoginBG} alt='Preview'/>
      <p className='blog-tittle'>Tittle Blog</p>
      <p className='blog-author'>Author - Date Post</p>
      <p className='blog-body'>Content Blog</p>
    </div>
  )
}

export default DetailBlog
