import './HomePage.css'
// eslint-disable-next-line no-unused-vars
import CalenderView from '../CompPages/CalenderView'
import DayScheduleView from '../CompPages/DayScheduleView'
import SideBar from '../CompPages/SiderBar'
import React,{useState} from 'react'

function HomePage(){

    const [showSideBar, setshowSideBar] = useState("none");

    return (
        <>
        <nav>
            <p id='App-title' >Productive Diary</p>
            
            <div id="Navbar-rightside">
                <div onClick={()=>{setshowSideBar("grid")}}  id="profile-svg"></div>
            </div>
        </nav>

        <SideBar display={showSideBar} />

        {/* <CalenderView   /> */}
        <DayScheduleView></DayScheduleView>
        </>
    )

}

export default HomePage