import AdBanner from '@/components/AdBanner/AdBanner'
import Banner from '@/components/Banner/Banner'
import BlogSection from '@/components/BlogSection/BlogSection'
import Greenery from '@/components/Greenery/Greenery'
import Nav from '@/components/Nav/Nav'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Nav />
        <Banner />
        <Greenery />
        <AdBanner />
        <BlogSection />
    </div>
  )
}

export default Home