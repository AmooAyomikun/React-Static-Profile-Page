import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const SocialLinks = (props) => {
    const socialLink = props.socialLink
  return (
    <div className='social-links'>
        <h2>LINKS</h2>
        <div >
            {socialLink.map((social) => {
                return (
                    <div className="linkCard" key={social.platform}>
                        <div className='firstCard'>
                            <FontAwesomeIcon icon={social.logo} color='#38bdf8' size='2xl' />
                            <div className="socialInfo">
                                <h3>{social.platform}</h3>
                                <p>{social.username}</p>
                            </div>
                        </div>

                        <a href={social.url} target='_blank'><FontAwesomeIcon icon={faLink} /></a>
                    </div> 
                )
            })}
        </div>
    </div>
    
  )
}

export default SocialLinks