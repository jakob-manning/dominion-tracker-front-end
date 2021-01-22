import React from 'react'
import './SideDrawer.css'

interface Props {
    close: () => void
}

const SideDrawer: React.FC<Props> = (props) => {

    return <aside className={"side-drawer"} onClick={props.close}>{props.children}</aside>


}

export default SideDrawer