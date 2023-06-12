import React from 'react'
import { LogoType } from '../LogoType'
import { LogOut } from '../LogOut'
import { NavigationAdmin } from '../Navigation/NavigationAdmin'


export const Panel = () => {
  const style_sidebar = {
    sidebar: {
        width: '200px',
        position: 'fixed',
        top: '0px',
        left: '0px',
        height: '100%',
        background: '#32383d',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

return (
    <aside className="sidebar" style={style_sidebar.sidebar}>
        <LogoType />
        <NavigationAdmin />
        <LogOut />
    </aside>
)
  
}
