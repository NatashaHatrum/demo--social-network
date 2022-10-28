import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import Modal from "./Modal";


const MyCalendar = ( )=> {

    const [date, setDate] = useState(new Date());
    const [modalActive, setModalActive] = useState(false);

    const handleToggle = () => {
        setModalActive( actualState => !actualState)
    }

    return (

        <div className='app'>
            <h1> My calendar</h1>
            <div>
                <Calendar onClickDay={handleToggle} onChange={setDate} value={date} selectRange={true}/>
            </div>
           {/* <div>
                {modalActive &&<Modal active={modalActive} setActive={setModalActive}/>}
            </div>*/}
            {date.length > 0 ? (
                <p>
                    <span>Start:</span>{' '} {date[0].toDateString()}
                    &nbsp; to &nbsp;
                    <span>End:</span> {date[1].toDateString()}
                </p>
            ) : (
                <p>
                    <span>Default selected date:</span>{' '} {date.toDateString()}
                </p>
            )}
        </div>



    );


}

export default MyCalendar;