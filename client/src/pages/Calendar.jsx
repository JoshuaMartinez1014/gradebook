import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calendar() {
  return (
    <div style={{ width: "80%", paddingTop: "30px" }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-06-01" },
          { title: "event 2", date: "2023-06-02" },
        ]}
      />
    </div>
  );
}

export default Calendar;
