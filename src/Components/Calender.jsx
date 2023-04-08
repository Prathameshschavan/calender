import React from 'react'
import FullCalender from "@fullcalendar/react" ;
import dayGripPlugin from "@fullcalendar/daygrid";
import timeGripPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from 'react-redux';
import * as bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from "react-bootstrap"
const Calender = () => {
    // let date = new Date();
  //  console.log(date)
    var events= useSelector((store)=>{
      return store.data;
    })

    // console.log(events);
  return (
    <div>
        <FullCalender
           plugins={[dayGripPlugin, timeGripPlugin, interactionPlugin]}
           initialView='dayGridMonth'
           height={"100vh"}
           headerToolbar={
             {start:"today prev next",
             center:"title",
             end:"dayGridMonth, timeGridWeek, timeGridDay"}
           }
           events={events}
           eventDidMount={(info) => {
            console.log(info.event._def)
            return new bootstrap.Popover(info.el, {
              title: info.event.title,
              placement: "auto",
              trigger: "click",
              customClass: "popoverStyle",
              content:
                `<div><p>${info.event._def.extendedProps.description}</p> 
                <h5 style={{border:"2px solid red"}}>Type:${info.event._def.extendedProps.type} </h5></div>
                <button>Start</button>
                `,
              html: true,
            });
          }}
        />
    </div>
  )
}

export default Calender
