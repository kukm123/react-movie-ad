import React from 'react'
import imgName from './MESA_HOME.png';
import imgName1 from './MESA_HOME2.png';



export default function Home () {
    return (
        <div className = 'page-container' style = {{ fontSize : "32px"}}>
            <a href="https://mesa.kr/"><img style = {{ width : "1250px" }}src={imgName} alt="매사1" /></a>
            <a href="https://mesa.kr/"><img style = {{ width : "1250px", marginTop : "10px" }}src={imgName1} alt="매사1" /></a>
        </div>
    )
}