import React from 'react'
import Header from '../HomePageComponents/Header.jsx'
import Content from '../HomePageComponents/Content.jsx'
function HomePage() {
  return (
      <div className='min-h-screen bg-[#e5e7eb] flex flex-col'>
            <Header></Header>
            <Content></Content>
       </div>
  )
}

export default HomePage
