import React from 'react'
import './Certification.css'
import logo1 from '../../Assets/image/logi1.png'
import logo2 from '../../Assets/image/logo2.png'

const Certifications = () => {
    return (
        <div>
            <div className='certification'>
                <h1>Certifications</h1>
            </div>
            <div className='logo_div'>
                <div className='logo1_div'> 
                    <img src={logo1} alt="" />
                </div>
                <div className='logo2_div'>
                    <img src={logo2} alt="" className='logo2' />
                </div>
            </div>
        </div>
    )
}

export default Certifications