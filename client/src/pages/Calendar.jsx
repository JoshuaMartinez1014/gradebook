import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../styles/global.css";

function Calendar() {
  return (
    <div style={{ width: "80%", height: "100%", paddingTop: "30px" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        height="100%"
        events={[
          { title: "event 1", date: "2023-06-01" },
          { title: "event 2", date: "2023-06-02" },
        ]}
      />
    </div>
  );
}

export default Calendar;
