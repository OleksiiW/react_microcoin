import { LogOut } from "./LogOut"
import { LogoType } from "./LogoType"
import { Navigation } from "./Navigation/Navigation"

export const Menu = () => {

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
            <Navigation />
            <LogOut />
        </aside>
    )
}