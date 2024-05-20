import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function MovieDetail() {

    const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
    const { title } = useParams() ;
    const { state } = useLocation() ;

    return (
    <div className='page-container'>
        <div style={{display: "flex"}}>
            <img 
                style={{ width : "300px", height : "450px"}} 
                src={IMG_BASE_URL + state.poster_path} 
                alt="포스터"
            />
        
            <div>
                <div style={{ fontSize: "30px"}}> {title} </div>
            </div>      
        </div>
    </div>
    )
}
