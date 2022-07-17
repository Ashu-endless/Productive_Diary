import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderView.css'

function tilecontentassign(date,view){
    console.log(date,view)
    if (view === 'month' && date.getDate() === 29){
        return <p className='tasksno' >5</p>
    }
    if (view === 'month' && date.getDate() === 25){
        return <p className='tasksno' >9</p>
    }
}


function CalenderView() {
    return ( <>
    <Calendar 
    // tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDate() === 29? <p className='tasksno' >5</p> : null}  
    tileContent={({ activeStartDate, date, view }) => tilecontentassign(date,view)}  
    onClickDay={(value, event) => console.log('Clicked day: ', value)} />
    </> );
}

export default CalenderView;