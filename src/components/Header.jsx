import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="header-container"> 
            <div className="header-wrap">
                <div className="header-left-wrap">
                    <Link to="/">
                        <img style={{width:"100px", height: "40px"}} 
                            src="https://www.mesa.kr/image/common/mesa_logo_w.svg" alt="Logo" />
                    </Link>

                    <ul>
                        <li>
                            <Link className="header-nav-item" to="/movie">
                                영화
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to="/tv">
                                TV프로
                            </Link>
                        </li>
                        <li>
                            <Link className="header-nav-item" to="/person">
                                인물정보
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}