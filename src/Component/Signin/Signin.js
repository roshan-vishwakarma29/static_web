import React, { useState } from 'react'
import './Signin.css'
const Signin = () => {
    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [Organization, setOrganization] = useState('')
    const [Email, setEmail] = useState('')

    return (
        <div className='singin_background_img'>
            <div className='free_demo'>
                <h1 className='demo_page'>Sign up for your free <br /> demo</h1>
                <p className='team_makes_search'>Our team makes the search for the right solution simple.</p>
            </div>
            <div className='login_form'>
                <div >
                    <input type="text" className='txtFname' placeholder='First Name' onChange={(e) => setFname(e.target.value)} />
                </div>
                <div >
                    <input type="text" className='txtFname' placeholder='Last Name' onChange={(e) => setLname(e.target.value)} />
                </div>
                <div >
                    <input type="text" className='txtFname' placeholder='Organization' onChange={(e) => setOrganization(e.target.value)} />
                </div>
                <div >
                    <input type="email" className='txtFname' placeholder='Professional Email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='verification'>
                    <div >
                        <input type="checkbox" className="checkbox" name="" id="" />
                    </div>
                    <div>
                        <p>I'm Not a Robot </p>
                    </div>
                    <div>
                        <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="" style={{ width: "60px" }} />
                    </div>
                </div>
                <div className='btn_div'>
                    <button type="button" className='btn_submit'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default Signin