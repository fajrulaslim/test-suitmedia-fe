'use client'
import React from 'react';
import Link from 'next/link';
import Dropdown from '@/components/atoms/Dropdown';
import { BsSearch } from "react-icons/bs";

const index = () => {
  return (
    <nav className="header">
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
        <div className="md:hidden">
          <button id="menu-button" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="md:hidden hidden">
        <Link href="/">
          <div className="block text-white p-2">Home</div>
        </Link>
        <Link href="/about">
          <div className="block text-white p-2">Home</div>
        </Link>
      </div>
    </nav>
  )
}

export default index