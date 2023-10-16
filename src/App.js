import React from 'react'
import './Font.css'
import Navbar from './Component/Navbar/Navbar'
import Content from './Component/Content/Content'
import Industries from './Component/Industries/Industries'
import Aboutveoci from './Component/Aboutveoci/Aboutveoci'
import Signin from './Component/Signin/Signin'
import Certifications from './Component/Certifications/Certifications'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Industries />
      <Aboutveoci />
      <Signin />
      <Certifications />
      <Footer />
    </>
  )
}

export default App