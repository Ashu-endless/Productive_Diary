import './SideBar.css'
import { NavLink } from 'react-router-dom';
// import React,{useEffect,useState} from 'react';


function SideBar(props) {

    // const [showSideBar, setshowSideBar] = useState(props.display);


    // useEffect(() => {
    
      
    // }, [props])
    

    return ( 
    <div id='SideBar' style={{display:props.display}} >
        <div id='header' >
        <span id='hide-sidebar-icon' onClick={()=>{document.querySelector('#hide-Sidebar').click()}} >
        <i className="bi bi-forward"   ></i>
        </span> <b>User.name</b>
        </div>
        
        <ul className='ulcol34' >
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to={'/home'} ><i className="bi bi-house"></i><span><span>Home</span></span></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to={'/account_settings'} ><i className="bi bi-person"></i><span><span>Edit account</span></span></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to={'/Today'} ><i className="bi bi-clock"></i><span>Today</span></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"} to={'/'} ><i className="bi bi-bell"></i><span>Upcoming Tasks</span></NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-header" : "unactive-header"}  to={'/CalenderView'} ><i className="bi bi-calendar4-week"></i><span><span>Calender View</span></span></NavLink>
        </ul>
    </div> );
}

export default SideBar;