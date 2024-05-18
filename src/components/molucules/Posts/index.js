import React from 'react'
import Link from 'next/link';
import TitleTop from "@/components/atoms/TitleTop"
import CardPosts from "@/components/atoms/CardPosts"
import { BsChevronRight } from "react-icons/bs";

const index = () => {
    const dataPosts = [
        {
            id: 1,
            tag: "Pet knowledge",
            title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
            desc: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
            image: "/images/posts/post-1.webp"
        },
        {
            id: 2,
            tag: "Pet knowledge",
            title: "Dog Diet You Need To Know",
            desc: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
            image: "/images/posts/post-2.webp"
        },
        {
            id: 3,
            tag: "Pet knowledge",
            title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
            desc: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
            image: "/images/posts/post-3.webp"
        },
    ]

    return (
        <section className="section-posts">
            <div className="container">
                <TitleTop
                    desc="You already know ?"
                    title="Useful pet knowledge"
                    linkName="View more"
                />
                <div className="section-posts-cards">
                    {
                        dataPosts?.map(item => (
                            <CardPosts data={item} key={item?.id} />
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