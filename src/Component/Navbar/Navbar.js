import React, { useState } from 'react'
import './Navbar.css'
import veoci from '../../Assets/image/veociimg.svg'

const Nevbar = () => {
  return (
    <div className='containers'>
      <div className='sign'>
        <a href="https://veoci.com/contact">Contact us</a>
        <a href="https://veoci.com/v">Sign in</a>
      </div>
      <div className='navbar'>
        <div >
          <img className='veoci_img' src={veoci} alt="" />
        </div>
        <div className='dropdown'>

          <div>
            <select className="language" id="lang">
              <option value="">Solution</option>
              <option value="">c++</option>
              <option value="">jeera</option>
              <option value="">python</option>
              <option value="">.net</option>
            </select>
          </div>
          <form action="#">
            <select className="language" id="lang">
              <option value="">Industries</option>
              <option value="">java</option>
              <option value="">c++</option>
              <option value="">jeera</option>
              <option value="">python</option>
              <option value="">.net</option>
            </select>
          </form>
          <form action="#">
            <div>
              <select className="language" id="lang">
                <option value="">Resources</option>
                <option value="">java</option>
                <option value="">c++</option>
                <option value="">jeera</option>
                <option value="">python</option>
                <option value="">.net</option>
              </select>
            </div>
          </form>
          <form>
            <select className="language" id="lang">
              <option value="">About Us</option>
              <option value="">java</option>
              <option value="">c++</option>
              <option value="">jeera</option>
              <option value="">python</option>
              <option value="">.net</option>
            </select>
          </form>
        </div>
        <div className='search_btn'>
          <div className='search_box'>
            <input type="search" className="fas fa-search" placeholder='Search' />
          </div>
          <div>
            <button type='submt' className='btn_primary'>Request to Domain</button>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Nevbar