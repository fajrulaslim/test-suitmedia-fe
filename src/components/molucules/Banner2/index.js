import React from 'react'
import Link from 'next/link';
import { BsPlayCircle } from "react-icons/bs";

const index = () => {
  return (
    <section className="section-banner2">
        <div className="container">
            <div className="grid grid-cols-2">
                <div className="section-banner2-left">
                    <div>
                        <h1>
                            Adoption <span className="ml-2"><img src="/images/dog.webp"></img></span>
                        </h1>
                        <h4>
                            We need help. so do they.
                        </h4>
                        <p>
                            Adopt a pet and give it a home, <br/>
                            it will be love you back unconditionally.
                        </p>
                        <div className="section-banner2-action">
                            <Link href="/" className='button-primary section-banner2-button'>
                                Explore Now
                            </Link>
                            <Link href="/" className='button-secondary section-banner2-button' >
                                View Intro
                                <BsPlayCircle className='inline ml-2' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="section-banner2-right">
                    <img src="/images/hero/human-3.webp" alt="image"></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index