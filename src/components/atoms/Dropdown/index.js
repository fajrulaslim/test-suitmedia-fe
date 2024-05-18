'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { BsChevronDown } from "react-icons/bs";

const index = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <div className='dropdown-parent'>
                <button
                    type="button"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {props.parent}
                    <BsChevronDown />
                </button>
            </div>

            {isOpen && (
                <div
                    className="dropdown-children"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <div className="py-1" role="none">
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default index