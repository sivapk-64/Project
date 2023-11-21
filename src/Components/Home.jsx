import React from 'react'
import PrimarySearchAppBar from './PrimarySearchAppBar'
import HomeContent from './HomeContent'
import Stove from '../Datafull/Stove'
import Laptop from '../Datafull/Laptop'
import Footer from './Footer'
import Checkout from './Checkout'
const Home = () => {
  return (
    <>
       <PrimarySearchAppBar/>
      <HomeContent/>
      <footer>
        <Footer/>
      </footer> 
    </>
  )
}

export default Home