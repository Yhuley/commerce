import React from "react";
import "./menu-item.styles.scss"
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, subtitle, imageUrl, size}) => {
    const navigate = useNavigate()

    return (
    <div className={`${size} menu-item`} onClick={() => navigate(title)}>
        <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )
    
}

export default MenuItem