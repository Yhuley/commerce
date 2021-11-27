import React, { useState } from "react";
import { useSelector } from "react-redux"
import MenuItem from "../menu-item/menu-item.component.jsx";
import "./directory.styles.scss"

const Directory = () => { 
    const { sections } = useSelector(state => state.directoryReducer)

    return (
        <div className="directory-menu">
            
            {
                sections.map(({ id, ...sectonsProps}) => (
                    <MenuItem key={id} {...sectonsProps }/>
                ))
            }
        </div>
    )
}

export default Directory