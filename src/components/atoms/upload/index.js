import React from 'react'
import './upload.scss'
import { LoginBG } from '../../../assets'

const Upload = () => {
    return (
        <div className='upload'>
            <img className='preview' src={LoginBG} alt='Preview'/>
            <input type='file' />
        </div>
    )
}

export default Upload
