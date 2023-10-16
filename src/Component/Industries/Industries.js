import React from 'react'
import './Industries.css'
import aviation from '../../Assets/image/aviation.png'
import finance from '../../Assets/image/finaance.png'
import enterprise from '../../Assets/image/enterprise.png'
import healthcare from '../../Assets/image/healthcare.png'
import utilities from '../../Assets/image/utilities.png'
import government from '../../Assets/image/government.png'
import k12 from '../../Assets/image/k-12.png'
import education from '../../Assets/image/education.png'
import faculties from '../../Assets/image/cropimg.png'
import Card from '../Card/Card'


const Industries = () => {
    return (
        <div className='background_img'>
            <div>
                <h1 className='header_Industries'>Industries</h1>
                <p className='organizations_processes'>We empower organizations, businesses, and communities of all
                    shapes and sizes to modernize and automate <br /> their processes - no matter how
                    complex or unique they are.</p>
            </div>
            <div className='grid_box'>
                <div className='aviation'><img src={aviation} alt="image" /><p>Aviation</p></div>
                <div className='finance'><img src={finance} alt="image" /> <p>Finance</p></div>
                <div className='finance'><img src={enterprise} alt="image" /><p>Enterprise</p></div>
                <div className='healthcare'><img src={healthcare} alt="image" /><p>Healthcare</p></div>
                <div className='utilities'><img src={utilities} alt="image" /><p>Utilities</p></div>
                <div className='government'><img src={government} alt="image" /><p>Government</p></div>
                <div className='k12'><img src={k12} alt="image" /><p>K-12Education</p></div>
                <div className='education'><img src={education} alt="image" /><p>Heigher Education</p></div>
            </div>
            <div className='faculties_div'>
                <div>
                    <img className='fack_img' src={faculties} alt="" />
                </div>
            </div>
            <div className='solutio'>
                <p className='solu_div'>Solution</p>
                <p className='Digital_transformation'>Digital transformation is within your reach. Our no-code software lets you configure modern solutions focused  on increasing efficiency and collaboration.</p>
                <Card />
            </div>
        </div>
    )
}

export default Industries