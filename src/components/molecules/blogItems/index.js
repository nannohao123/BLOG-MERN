import React from 'react'
import { RegisterBG } from '../../../assets'
import './blogItem.scss'
import { Button, Gap } from '../../atoms'
import { useNavigate } from 'react-router-dom'

const BlogItem = () => {
    const History = useNavigate();
    return (
        <div className='blog-item'>
            <img className='image-thumbnail' src={RegisterBG} alt='Thumbnail' />
            <div className='content-detail'>
                <p className='tittle'>Tittle</p>
                <p className='author'>Author - date post</p>
                <p className='body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus dolor, malesuada vel diam ac, scelerisque condimentum ex. Sed ut turpis sed elit congue ultricies. Praesent placerat tristique quam, eget gravida nisl aliquam sit amet. Mauris condimentum, ante ac ornare rutrum, diam sapien aliquet turpis, in feugiat purus ligula ac ex. Ut ac consectetur ligula. Fusce purus risus, convallis eu aliquam eu, bibendum eget lacus. Phasellus bibendum bibendum lobortis. Suspendisse scelerisque at arcu non sollicitudin.</p>
                <Gap height={20}/>
                <Button tittle="Read more" onClick={() => History('/detail-blog')}/>
            </div>
        </div>
    )
}

export default BlogItem
