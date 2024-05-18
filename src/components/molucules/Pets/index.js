import React from 'react'
import Link from 'next/link';
import TitleTop from "@/components/atoms/TitleTop"
import CardPets from "@/components/atoms/CardPets"
import { BsChevronRight } from "react-icons/bs";

const index = () => {
    const dataPets = [
        {
            id: 1,
            name: "MO231 - Pomeranian White",
            genre: "Male",
            age: "02 months",
            price: "6.900.000 VND",
            image: "/images/pets/image-1.webp"
        },
        {
            id: 2,
            name: "MO502 - Poodle Tiny Yellow",
            genre: "Female",
            age: "02 months",
            price: "3.900.000 VND",
            image: "/images/pets/image-2.webp"
        },
        {
            id: 3,
            name: "MO102 - Poodle Tiny Sepia",
            genre: "Male",
            age: "02 months",
            price: "4.000.000 VND",
            image: "/images/pets/image-3.webp"
        },
        {
            id: 4,
            name: "MO512 - Alaskan Malamute Grey",
            genre: "Male",
            age: "02 months",
            price: "8.900.000 VND",
            image: "/images/pets/image-4.webp"
        },
        {
            id: 5, 
            name: "MO231 - Pembroke Corgi Cream",
            genre: "Male",
            age: "02 months",
            price: "7.900.000 VND",
            image: "/images/pets/image-5.webp"
        },
        {
            id: 6,
            name: "MO502 - Pembroke Corgi Tricolor",
            genre: "Female",
            age: "02 months",
            price: "6.000.000 VND",
            image: "/images/pets/image-6.webp"
        },
        {
            id: 7,
            name: "MO231 - Pomeranian White",
            genre: "Female",
            age: "02 months",
            price: "6.500.000 VND",
            image: "/images/pets/image-7.webp"
        },
        {
            name: "MO512 - Poodle Tiny Dairy Cow",
            genre: "Male",
            age: "02 months",
            price: "5.000.000 VND",
            image: "/images/pets/image-8.webp"
        },
    ]

    return (
        <section className="section-pets">
            <div className="container">
                <TitleTop
                    desc="Whats new?"
                    title="Take a look at some of our pets"
                    linkName="View more"
                />
                <div className="section-pets-cards">
                    {
                        dataPets?.map(item => (
                            <CardPets data={item} key={item?.id} />
                        ))
                    }
                </div>
                <div className="section-top-mobile">
                    <Link href="/" className='button-secondary' >
                        View more
                        <BsChevronRight className='inline ml-2' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default index