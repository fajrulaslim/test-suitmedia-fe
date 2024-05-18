'use client'
import React from 'react';
import Link from 'next/link';
import Dropdown from '@/components/atoms/Dropdown';
import { BsSearch  } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";

const index = () => {
  return (
    <header>
      <nav className="header-desktop">
        <div className="container">
          <div className="header-brand">
            <Link href="/">
              <img src="/images/logo.webp" alt="logo"></img>
            </Link>
          </div>
          <div className="header-nav-link">
            <Link href="/" className="header-nav-link-a">
              Home
            </Link>
            <Link href="/" className="header-nav-link-a">
              Category
            </Link>
            <Link href="/" className="header-nav-link-a">
              About
            </Link>
            <Link href="/" className="header-nav-link-a">
              Contact
            </Link>
          </div>
          <div className="header-search-box">
            <span className="icon">
              <BsSearch />
            </span>
            <input name="search" className="header-search-input" placeholder="Search something here!"></input>
          </div>
          <div>
            <Link href="/" className="button-primary header-link-join">
              Join the community
            </Link>
          </div>
          <div className="header-select-language">
            <Dropdown
              parent={<>
                <div className='dropdown-button-parent'>
                  <img src="/images/flag-1.svg" alt="icon" className='mr-1'></img>
                  VND
                </div>
              </>}
              children={<>
                <button>ABC</button>
                <button>DEF</button>              
              </>}
            />
          </div>
        </div>
      </nav>
      <nav className="header-mobile">
        <div className="container">
          <div className="header-menu">
            <MdOutlineMenu />
          </div>
          <div className="header-brand">
            <Link href="/">
              <img src="/images/logo.webp" alt="logo"></img>
            </Link>
          </div>
          <div className="header-search">
            <BsSearch />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default index