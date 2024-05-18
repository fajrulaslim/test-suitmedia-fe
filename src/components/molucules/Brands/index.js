import React from 'react'
import TitleTop from "@/components/atoms/TitleTop"

const index = () => {
    const dataBrands = [
        {
            image: "/images/brands/brand-1.webp"
        },
        {
            image: "/images/brands/brand-2.webp"
        },
        {
            image: "/images/brands/brand-3.webp"
        },
        {
            image: "/images/brands/brand-4.webp"
        },
        {
            image: "/images/brands/brand-5.webp"
        },
        {
            image: "/images/brands/brand-6.webp"
        },
        {
            image: "/images/brands/brand-7.webp"
        }
    ]
    return (
        <section className="section-brands">
            <div className="container">
                <TitleTop
                    desc="Proud to be part of"
                    title="Pet Sellers"
                    linkName="View all our sellers"
                    oneLine={true}
                />
                <div className="section-brands-lists">
                    {
                        dataBrands?.map((item, i) => (
                            <div className="section-brands-item" key={i}>
                                <img src={item?.image}></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default index