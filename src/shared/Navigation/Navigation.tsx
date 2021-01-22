import React, {useState} from 'react'
import { Link } from "react-router-dom";
import SideDrawer from "../UI/sideDrawer/SideDrawer";
import Backdrop from "../UI/Backdrop/Backdrop";

const Navigation = () => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
            {drawerIsOpen && <SideDrawer close={closeDrawer}>
                <ul>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"/players"}>Players</Link></li>
                    <li><Link className="waves-effect" to={"/stats"}>Stats</Link></li>
                </ul>
            </SideDrawer>}
            <nav>
                <div className="nav-wrapper">
                    {/*<div className={"hamburger"} onClick={openDrawer}>|||</div>*/}
                    <div className={"brand-logo"} onClick={openDrawer}><Link to={"/"}>(hamburger) LOGO</Link></div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/players"}>Players</Link> </li>
                        <li><Link to={"/stats"}>Stats</Link> </li>
                        <li><Link to={"/"}>Home</Link> </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navigation