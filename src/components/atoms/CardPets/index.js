import React from 'react'
import { BsDot } from "react-icons/bs";

const index = (props) => {
    const { data } = props
    return (
        <div className="card-pets">
            <img src={data?.image} alt="image"></img>
            <div className="card-pets-box">
                <div className="name">
                    {data?.name}
                </div>
                <div className="desc">
                    Genre: <span>{data?.genre}</span>
                    <span className="px-2"><BsDot /></span>
                    Age: <span>{data?.age}</span>
                </div>
                <div className="price">
                    {data?.price}
                </div>
            </div>
        </div>
    )
}

export default index