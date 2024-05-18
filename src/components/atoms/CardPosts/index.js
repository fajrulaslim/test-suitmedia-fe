import React from 'react'
import { BsDot } from "react-icons/bs";

const index = (props) => {
    const { data } = props
    return (
        <div className="card-posts">
            <img src={data?.image} alt="image"></img>
            <div className="card-posts-box">
                <div className="tag">
                    {data?.tag}
                </div>
                <div className="title">
                    {data?.title}
                </div>
                <div className="desc">
                    {data?.desc}
                </div>
            </div>
        </div>
    )
}

export default index