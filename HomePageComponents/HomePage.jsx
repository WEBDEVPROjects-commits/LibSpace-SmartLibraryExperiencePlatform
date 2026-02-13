import React from 'react'
import Header from '../HomePageComponents/Header.jsx'
import Content from '../HomePageComponents/Content.jsx'
import Footer from './Footer.jsx'
function HomePage() {
  return (
      <div className='min-h-screen bg-[#e5e7eb] flex flex-col text-zinc-600'>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
                
       </div>
  )
}

export default HomePage
