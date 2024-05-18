import React from 'react'
import Hero from "@/components/molucules/Hero"
import Pets from "@/components/molucules/Pets"
import Banner1 from "@/components/molucules/Banner1"
import Products from "@/components/molucules/Products"
import Brands from "@/components/molucules/Brands"
import Banner2 from "@/components/molucules/Banner2"
import Posts from "@/components/molucules/Posts"

const index = () => {
  return (
    <main>
        <Hero />
        <Pets />
        <Banner1 />
        <Products />
        <Brands />
        <Banner2 />
        <Posts />
    </main>
  )
}

export default index