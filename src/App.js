import React from 'react'
import { Header, Browse, Hero, Arrived, Clients, Footer, AsideMenu } from './components'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AsideMenu />
      <Footer />
      <div
        style={{ display: 'none' }}
        className='max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg'
      >
        <div className='ml-6 pt-1'>
          <h1 className='text-2xl text-blue-700 leadng-tight'>Tailwind and Create React App</h1>
          <p className='text-base text-gray-700 leading-normal'>Build apps together</p>
        </div>
      </div>
    </div>
  )
}

export default App
