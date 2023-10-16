import React from 'react'
import './Aboutveoci.css'
const Aboutveoci = () => {
  const veoci = [
    {
      id: 1,
      thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69191c615b73edbf726b8_coop.png",
      title: "Coop Reinvented",
      link: "https://veoci.com/gated/coop-continuity-planning",
      paragraph: "Explore All Downloads and Reesource"
    },
    {
      id: 2,
      thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69191c615b7f431f726ba_webinar.png",
      title: "Systemwide Emergeny Exercise How CSU Connect it compuses",
      link: "https://webflow.veoci.com/webinar-landing-page/csu-earthquake-safety-drill",
      paragraph: "Explore All Downloads and Reesource"


    },
    {
      id: 3,
      thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69191c615b7ef9ff726bc_blog.png",
      title: "Business Continuity :review And perspective for 2003F",
      link: "https://webflow.veoci.com/webinar-landing-page/csu-earthquake-safety-drill",
      paragraph: "Explore All Downloads and Reesource"

    }
  ]
  return (
    <div className='colorfull_img'>
      <div><h1 className="learn_more">Learn More About Veoci</h1></div>
      <div className='grid_cal' >
        {
          veoci && veoci.map((i) => {
            return (
              <div className='veoci_div' key={i.id}>
                <div>
                  <div>
                    <img src={i.thumbnail} style={{ width: "100%" }} alt="" />
                  </div>
                  <div className='para_div'>
                    <p className='paragraph'>{i.title}</p>
                  </div>
                  <div> <a href={i.link}></a></div>
                </div>
              </div>  
             
                 
            )
          })
        }
      </div>
    </div>
  )
}

export default Aboutveoci