import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound () {
    const navigate = useNavigate ();


    return (
        <div className='page-container'> 
            <div style={{
                marginTop: '60px',
                fontSize: '50px',
                fontWeight: 'bold',
                marginBottom: '30px',
            }}>No sign, please return main page</div>

            <div 
                onclick={() => navigate('/')}
                style={{
                lineHeight: '1.5',
                fontSize: '20px',
                color: 'blue',
                fontWeight: 'bold',
            }}>메인 페이지 이동은 로고 클릭!</div>
        </div>
    )
}
