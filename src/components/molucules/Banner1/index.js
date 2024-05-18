import React from 'react'
import Link from 'next/link';
import { BsPlayCircle } from "react-icons/bs";

const index = () => {
  return (
    <section className="section-banner1">
        <div className="container">
            <div className="grid grid-cols-2 gap-x-10">
                <div className="section-banner1-left">
                    <img src="/images/hero/human-2.webp" alt="image"></img>
                </div>
                <div className="section-banner1-right">
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
                        <div className="section-banner1-action">
                            <Link href="/" className='button-secondary section-banner1-button' >
                                View Intro
                                <BsPlayCircle className='inline ml-2' />
                            </Link>
                            <Link href="/" className='button-primary section-banner1-button'>
                                Explore Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index