import React from 'react'
import Link from 'next/link';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube  } from "react-icons/bs";

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="subscribe">
          <div className="subscribe-box">
            <div className="subscribe-slogan">
              <h5>
                Register Now So You Don't Miss Our Programs
              </h5>
            </div>
            <form className="subscribe-form">
              <input name="email" type="email" className="input-email" placeholder="Enter your Email"></input>
              <button className="button-primary button-subscribe">Subscribe Now</button>
            </form>
          </div>
        </div>
        <div className="sitemaps">
          <div className="sitemaps-link">
            <Link href="/" className="sitemaps-link-a">
              Home
            </Link>
            <Link href="/" className="sitemaps-link-a">
              Category
            </Link>
            <Link href="/" className="sitemaps-link-a">
              About
            </Link>
            <Link href="/" className="sitemaps-link-a">
              Contact
            </Link>
          </div>
          <div className="sitemaps-sosmed">
            <Link href="/" className="sitemaps-sosmed-a">
              <BsFacebook />
            </Link>
            <Link href="/" className="sitemaps-sosmed-a">
              <BsTwitter />
            </Link>
            <Link href="/" className="sitemaps-sosmed-a">
              <BsInstagram />
            </Link>
            <Link href="/" className="sitemaps-sosmed-a">
              <BsYoutube />
            </Link>
          </div>
        </div>
        <div className="footer">
          <div className="footer-copyright">
            © 2022 Monito. All rights reserved.
          </div>
          <div className="footer-logo">
            <img src="/images/logo.webp"></img>
          </div>
          <div className="footer-link-term">
            <Link href="/" className="footer-link-term-a">
              Terms of Service
            </Link>
            <Link href="/" className="footer-link-term-a">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index