import React, {useState} from 'react'
import { Link } from "react-router-dom";
import SideDrawer from "../UI/sideDrawer/SideDrawer";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from './Navigation.module.css'

const Navigation: React.FC = () => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = (event: React.MouseEvent<HTMLAnchorElement>): void => {

        event.preventDefault()
        setDrawerIsOpen(true)
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
            {drawerIsOpen && <SideDrawer close={closeDrawer}>
                <div className={classes.sidebar}>
                    <div className={classes.home}><Link to={"/"}>Dominion World</Link></div>
                    <Link to={"/players"}>Players</Link>
                    <Link className="waves-effect" to={"/stats"}>Stats</Link>
                </div>
                </SideDrawer>}
            <nav>
                <div className={classes.topnav}>
                    {/*<div className={"brand-logo"} onClick={openDrawer}><Link to={"/"}>LOGO</Link></div>*/}
                        <div className={classes.home}><Link to={"/"}>Dominion World</Link></div>
                        <Link to={"/players"}>Players</Link>
                        <Link to={"/stats"}>Stats</Link>
                    <a href="/" className={classes.icon} onClick={ (event: React.MouseEvent<HTMLAnchorElement>) => openDrawer(event)}>
                        <div className={classes.hamburgerLayer} />
                        <div className={classes.hamburgerLayer} />
                        <div className={classes.hamburgerLayer} />
                    </a>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navigation