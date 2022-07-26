import './HomePage.css'
// eslint-disable-next-line no-unused-vars
import CalenderView from '../CompPages/CalenderView'
import DayScheduleView from '../CompPages/DayScheduleView'
import React,{useState} from 'react'
import SideBar from '../components/SideBar'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { Route,Routes } from 'react-router-dom'
function HomePage(){

    const [showSideBar, setshowSideBar] = useState("none");


    return (
        <>
        <nav>
            <p id='App-title' >Productive Diary</p>
            
            <div id="Navbar-rightside">
            <i nav-icon="notification" className="bi bi-bell"></i>
            <i onClick={()=>{setshowSideBar("grid")}}  nav-icon="profile" className="bi bi-person"></i>
            <ThemeSwitcher/>
                {/* <div ></div> */}
                <span id="hide-Sidebar" onClick={()=>{setshowSideBar("none")}}  hidden="True"></span>
            </div>
        </nav>

        <SideBar display={showSideBar} />
        <Routes>
            
        <Route path={'/dayView=:slug/'} element={<DayScheduleView/>}  />  
        <Route path='/calenderView' element={<CalenderView/>}  />  
        </Routes>

        {/* <CalenderView   /> */}
        {/* <DayScheduleView></DayScheduleView> */}
        </>
    )

}

export default HomePage