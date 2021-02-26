import React from 'react'
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className='footer-subscription-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='your email'
                            className='footer-input'
                        >
                        </input>
                        <Button buttonStyle='btn--outline'>subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h3>about us</h3>
                        <Link to='/sign-up'>find out more about how it works</Link>
                        <Link to='/'>recommendations</Link>
                        <Link to='/'>career</Link>
                        <Link to='/'>..more</Link>
                        <Link to='/'>terms and conditions</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h3>contact us</h3>
                        <Link to='/'>contact</Link>
                        <Link to='/'>support</Link>
                        <Link to='/'>destinations</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h3>videos</h3>
                        <Link to='/'>submit</Link>
                        <Link to='/'>ambassadors</Link>
                        <Link to='/'>influencers</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h3>social media</h3>
                        <Link to='/'>ig</Link>
                        <Link to='/'>fb</Link>
                        <Link to='/'>tw</Link>
                        <Link to='/'>yt</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            travel. <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>travel. © 2021</small>
                    <div className='social-icons'>
                        <Link 
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link 
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link 
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube'></i>
                        </Link>
                        <Link 
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link 
                            className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
