
// import React, { useState } from 'react'

// const Prack = () => {
//     const [isHovering, setisHovering] = useState(false)
//     const handleMouseHover = () =>{
//         setisHovering(true)
//     }
//     const handleMouseOut =() =>{
//         setisHovering(false)
//     }
//     return (
//         <div>
//             <div onMouseOver={handleMouseHover}
//                 onMouseOut={handleMouseOut}>
//                 <h1>roshan</h1>
//                 {isHovering && (
//                     <div>
//                         <h2>hello iam rosha vishwakarma iam from thane </h2>
//                     </div>
//                 )}

//             </div>
//         </div>
//     )
// }

// export default Prack
import React, { useState } from 'react'

const Prack = () => {
    const [roshanhover, setroshanhover] = useState(false)
    const [shoot, setshoot] = useState(false)

    const showdata = () => {
        setroshanhover(true)
    }
    const hidedata = () => {
        setroshanhover(false)
    }
   

    return (
        <div>
            <div onMouseOver={showdata}
                onMouseOut={hidedata}>
                <select name="roshan" id="roshan">ashish</select>
                {roshanhover && (
                    <div>
                        <option value="" >roshan</option>
                        <option value="">roshan</option>
                        <option value="">roshan</option>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Prack