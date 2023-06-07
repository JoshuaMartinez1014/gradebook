import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../styles/global.css";

function Calendar() {
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
        events={[
          { title: "HW 1", date: "2023-06-01" },
          { title: "HW 2", date: "2023-06-02" },
          { title: "HW 3", date: "2023-06-07" },
          { title: "HW 4", date: "2023-06-15" },
        ]}
      />
    </div>
  );
}

export default Calendar;
