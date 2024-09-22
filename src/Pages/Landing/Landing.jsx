import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Category from '../../Components/Category/Category'
import Carousel from '../../Components/Carousel/CarouselEffect'
import Product from "../../Components/product/Product";

function Landing() {
  return (
    <LayOut>
      <Carousel/>
      <Category/>
      <Product/>
    </LayOut>
  )
}

export default Landing
