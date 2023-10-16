import React from 'react'
import './Content.css'
import veociimg from '../../Assets/image/veocimg.png'


const Content = () => {
    return (
        <div className='content_page'>
            <div>
                <div>
                    <p className='Response'> Response. Resilience. <br />
                        Ready.
                    </p>
                </div>
                <div>
                    <p className='Veoci_para'>Veoci is the leading software platform for emergency management,
                        business continuity, and everyday operations.</p>
                </div>
                <div className='btn_div'>
                    <div>
                        <button className='Export_by_Industry'><span>Export by Industry</span></button>
                    </div>
                    <div>
                        <button className='Export_by_Solution'><span>Export by Solution</span></button>
                    </div>
                </div>
            </div>
            <div className='image_div'>
                <img src={veociimg} alt="" />
            </div>
        </div>
    )
}

export default Content