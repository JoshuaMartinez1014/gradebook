import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../styles/global.css";
import { useState, useEffect } from "react";


function Calendar() {

  const [dateData, setDateData] = useState();
  async function lookupDate() {
    const apiPath = `/api/assignment`
    const searchQuery = await fetch(apiPath)
    const results = await searchQuery.json()
    console.log(results)
    const test=results.map(hw => ({ id: hw._id, title: hw.assignment_name, date: hw.due_date, url: `/assignment/${hw._id}`}
    ))
    console.log(test)
    setDateData(test)
  }


useEffect(() => {
  console.log("context use effect working");
  lookupDate();
}, []);
return (
  <div
    style={{
      width: "80%",
      paddingTop: "30px",
      overflowX: "auto",
      minWidth: "600px",
    }}
  >
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="100vh"
      events={dateData}
      

    />
  </div>
);
}

export default Calendar;
