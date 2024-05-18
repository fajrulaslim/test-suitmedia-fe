import React from 'react'
import Link from 'next/link';
import { BsChevronRight } from "react-icons/bs";

const index = (props) => {
    return (

        <div className='section-top'>
            <div className="flex justify-between items-end">
                <div className={`section-top-left ${props?.oneLine && 'flex items-center'}`}>
                    <p className="mr-2">
                        {props.desc}
                    </p>
                    <h6>
                        {props.title}
                    </h6>
                </div>
                <div className="section-top-right">
                    <Link href="/" className='button-secondary' >
                        {props.linkName}
                        <BsChevronRight className='inline ml-2' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default index