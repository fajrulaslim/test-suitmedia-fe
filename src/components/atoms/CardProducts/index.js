import React from 'react'
import { BsDot } from "react-icons/bs";

const index = (props) => {
    const { data } = props
    return (
        <div className="card-products">
            <img src={data?.image} alt="image"></img>
            <div className="card-products-box">
                <div className="name">
                    {data?.name}
                </div>
                <div className="desc">
                    <div>Product: <span>{data?.product}</span></div>
                    <div>{data?.size && (<><span className="dot"><BsDot /></span> Size: <span>{data?.size}</span></>)}</div>
                </div>
                <div className="price">
                    {data?.price}
                </div>
                {
                    data?.gift && (
                        <div className="gift">
                            <img src="/images/gift.webp"></img>
                            <span className="px-2"><BsDot /></span>
                            <span>{data?.gift}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default index