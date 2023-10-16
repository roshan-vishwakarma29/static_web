import React from 'react'
import './card.css'

const Card = () => {
    const data = [
        {
            id: 1,
            title: "Emergency Management",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c380967e9d01e_emergency.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c380620e9d02c_emergency%20management.png"
        },
        {
            id: 2,
            title: "Business Continutity",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c381474e9d020_Business%20Cont%20icon.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c385f6be9d02e_business%20continuity.png"
        },
        {
            id: 3,
            title: "Continutityu of operations Planning(COOP)",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c380967e9d01e_emergency.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c38041ce9d030_coop%20image.png"
        },
        {
            id: 4,
            title: "Communication & Collabration",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c38668fe9d028_collaboration.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c38a737e9d036_communication%20collaboration.png"
        },
        {
            id: 5,
            title: "Mass Notifivation",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c382596e9d026_mass%20notification.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c3843e6e9d034_mass%20image.png"
        },
        {
            id: 6,
            title: "GIS mapping",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c38664de9d024_GIS%20mapping.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c38a894e9d032_map%20image.png"
        },
        {
            id: 7,
            title: "Pandemicn Management",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c381eb7e9d009_covid.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c38f4a8e9d02a_covid%20girl.png"
        },
        {
            id: 1,
            title: "Emergency Management",
            icon: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c380967e9d01e_emergency.png",
            thumbnail: "https://assets-global.website-files.com/5c4204f93b33dd797889cf70/63f69156171c380620e9d02c_emergency%20management.png"
        }
    ]
    
    return (
        <div className='contrnt_wrap'>
            {
                data && data.map((i) => {
                    return (
                        <div className='grid-col-card' key={i.id}>
                            <div className='data_content'>
                                <div>
                                    <img className='icon' src={i.icon} alt="" />
                                </div>
                                <div>
                                    <p className='title_para'>{i.title}</p>
                                </div>
                            </div>
                            <div>
                                <img src={i.thumbnail} alt="" />
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Card