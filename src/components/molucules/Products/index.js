import React from 'react'
import TitleTop from "@/components/atoms/TitleTop"
import CardProducts from "@/components/atoms/CardProducts"

const index = () => {
    const dataProducts = [
        {
            id: 1,
            name: "Reflex Plus Adult Cat Food Salmon",
            product: "Dog Food",
            size: "385gm",
            price: "140.000 VND",
            gift: "Free Toy & Free Shaker",
            image: "/images/products/product-1.webp"
        },
        {
            id: 2,
            name: "Reflex Plus Adult Cat Food Salmon",
            product: "Cat Food",
            size: "1.5kg",
            price: "165.000 VND",
            gift: "Free Toy & Free Shaker",
            image: "/images/products/product-2.webp"
        },
        {
            id: 3,
            name: "Cat scratching ball toy kitten sisal rope ball",
            product: "Toy",
            price: "1.100.000 VND",
            gift: "Free Cat Food",
            image: "/images/products/product-3.webp"
        },
        {
            id: 4,
            name: "Cute Pet Cat Warm Nest",
            product: "Toy",
            price: "410.000 VND",
            gift: "Free Cat Food",
            image: "/images/products/product-4.webp"
        },
        {
            id: 5, 
            name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
            product: "Dog Food",
            size: "385gm",
            price: "350.000 VND",
            gift: "Free Toy & Free Shaker",
            image: "/images/products/product-5.webp"
        },
        {
            id: 6,
            name: "Costumes Fashion Pet Clother Cowboy Rider",
            product: "Costume",
            size: "1.5kg",
            price: "500.000 VND",
            gift: "Free Toy & Free Shaker",
            image: "/images/products/product-6.webp"
        },
        {
            id: 7,
            name: "Costumes Chicken Drumsti ck Headband",
            product: "Costume",
            price: "400.000 VND",
            gift: "Free Cat Food",
            image: "/images/products/product-7.webp"
        },
        {
            id: 8,
            name: "Plush Pet Toy",
            product: "Toy",
            price: "250.000 VND",
            gift: "Free Food & Shaker",
            image: "/images/products/product-8.webp"
        },
    ]

    return (
        <section className="section-pets section-products">
            <div className="container">
                <TitleTop
                    desc="Hard to choose right products for your pets?"
                    title="Our Products"
                    linkName="View more"
                />
                <div className="section-pets-cards">
                    {
                        dataProducts?.map(item => (
                            <CardProducts data={item} key={item?.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default index