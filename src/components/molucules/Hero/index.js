import React from 'react'
import Link from 'next/link';
import { BsPlayCircle } from "react-icons/bs";

const index = () => {
    return (
        <section className="section-hero">
            <div className="container">
                <div className="section-hero-left">
                    <div>
                        <h1>
                            One More Friend
                        </h1>
                        <h4>
                            Thousands more fun!
                        </h4>
                        <p>
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                        </p>
                        <div className="section-hero-action">
                            <Link href="/" className='button-secondary section-hero-button' >
                                View Intro
                                <BsPlayCircle className='inline ml-2'  />
                            </Link>
                            <Link href="/" className='button-primary section-hero-button'>
                                Explore Now
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='section-hero-right'>
                    <img src="/images/hero/human-1.webp" className="image"></img>
                </div>
            </div>
        </section>
    )
}

export default index