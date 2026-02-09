import React from 'react'

function Intro() {
  return (
    <div className='flex flex-col flex-wrap content-center items-center p-2 m-auto text-zinc-700 gap-8 h-8/12 w-10/12'>
      <h1 className=' font-extrabold md: text-3xl lg:text-6xl text-center'>LibSpace-A <span className='text-emerald-600'>Smart</span> Library Experience platform for the students</h1>
      <div className='text-center sm:text-base md:text-xl'>A smart platform to manage your daily library experience — from attendance to services — all in one place</div>
    </div>
  )
}

export default Intro
