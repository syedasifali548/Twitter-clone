import { Icon } from '@material-ui/core'
import React from 'react'
import './SidebarOption.css'

function SidebarOption({active, text,Icon }) {
    return (
        <div className={active?'sidebarOption--active':'sidebarOption'}>

            <Icon/>
            <h2>{text}</h2>

        </div>
    );
}

export default SidebarOption; 
