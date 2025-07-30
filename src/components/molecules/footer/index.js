import React from 'react'
import './footer.scss'
import {Logo} from '../../../assets'
import {ICDiscord, ICFacebook,ICInstagram,ICTelegram,ICGithub,ICLinkedin} from '../../../assets'


const Icon = ({img}) => {
    return(
        <div className='icon-wrapper'>
            <img className='icon-sosmed' src={img} alt='icon'/>
        </div>
    )
}


function Footer() {
  return (
    <div>
      <div className='footer'>
        <div>
            <img className='logo' src={Logo} alt='logo'/>
        </div>
        <div className='social-wrapper'>
            <Icon img={ICFacebook}/>
            <Icon img={ICInstagram}/>
            <Icon img={ICGithub}/>
            <Icon img={ICDiscord}/>
            <Icon img={ICTelegram}/>
            <Icon img={ICLinkedin}/>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright</p>
      </div>
    </div>
  )
}

export default Footer
