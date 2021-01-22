import React, {useState} from 'react'
import Backdrop from "../shared/UI/Backdrop/Backdrop";

const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const toggleBackground = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <div>
            {isDrawerOpen && <Backdrop onClick={toggleBackground}/>}
            <button onClick={toggleBackground}>Sign In</button>
        </div>
    )
}

export default Home