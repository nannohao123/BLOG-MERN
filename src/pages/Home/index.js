import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss'
import {useNavigate } from 'react-router-dom'

function Homepage() {
  const History = useNavigate ();
  return (
    <div className='homepage-wrapper'>
      <div className='create-wrapper'>
        <Button tittle="CREATE BLOG" onClick={() => History('/create-blog')}/>
      </div>
      <Gap height={20}/>
      <div className='content-wrapper'>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className='pagination'>
        <Button tittle="Previous"/>
        <Gap height={20}/>
        <Button tittle="Next"/>
      </div>
      <Gap height={20}/>
    </div>
  )
}

export default Homepage
