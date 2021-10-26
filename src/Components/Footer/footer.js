import logo from '../../icons/svg/logo.svg';
import fbIcon from '../../icons/svg/facebook_icon.svg'
import inIcon from '../../icons/svg/linkedin_icon.svg'
import igIcon from '../../icons/svg/instagram_icon.svg'
import twtIcon from '../../icons/svg/twitter_icon.svg'
import React from "react";
import './footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <a href='https://www.facebook.com/holatoroto'>
                <img src={fbIcon} className="fb-logo" alt="logo" />
            </a>
            <a href='https://www.linkedin.com/company/toroto/'>
                <img src={inIcon} className="in-logo" alt="logo" />
            </a> 
            <a href='https://twitter.com/holatoroto'>
                <img src={twtIcon} className="twt-logo" alt="logo" />
            </a> 
            <a href='https://www.instagram.com/holatoroto/'>
                <img src={igIcon} className="ig-logo" alt="logo" />
            </a> 
            <ul>
            <img src={logo} className="logo" alt="logo" />
            </ul>
        </div>
    )
}

export default Footer