import React from 'react'
import {Button, Gap, Input, Textarea, Upload} from '../../components'
import './createbllog.scss'
import { useNavigate } from 'react-router-dom'

function CreateBlog() {
  const History = useNavigate();
  return (
    <div className='blog-post'>
      <p className='tittle'>Create new blog post</p>
      <Input label="Post Tittle"/>
      <Upload/>
      <Textarea/>
      <Gap height={20}/>
      <div className='button-action'>
        <Button tittle="Save" onClick={() => History('/detail-blog')}/>
      </div>  
      <Gap height={20}/>
    </div>
  )
}

export default CreateBlog
