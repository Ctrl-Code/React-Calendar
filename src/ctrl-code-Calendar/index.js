import React, { useState, useEffect } from "react";
import "./css/index.css";

import Month from "./month";
import Year from "./year";
import Days from "./days";

const functions = require("./functions");

function CtrlCodeCalendar(props) {

    // state to show calendar
    let [showCalendar, setShowCalendar] = useState(true);

    let initialDate = functions.destructureEpoch(new Date(props.epoch).getTime());

    // date calculate states
    const [date, setDate] = useState(initialDate.date);
    const [month, setMonth] = useState(initialDate.month + 1);
    const [year, setYear] = useState(initialDate.year);

    let { setEpoch } = props;
    useEffect(() => setEpoch(functions.getEpoch(date, month, year)), [date, month, year, setEpoch]);

    let toggleShowCalendar = event => {
        setShowCalendar(showCalendar ? false : true);
        event.stopPropagation();
    }

    let inputFieldValue = () => {
        let localDate = date, localMonth = month, localYear = year;

        if (date < 10) {
            localDate = "0" + date;
        }

        if (month < 10) {
            localMonth = "0" + month;
        }

        return `${localDate}/${localMonth}/${localYear}`;
    };

    return (
        <div className="ctrl-code-box" style={{ width: props.width || "300px" }}>
            <input
                onClick={toggleShowCalendar}
                type="text"
                readOnly={true}
                className="inputField"
                value={inputFieldValue()}
            />

            {/* CALENDAR DIV */}
            {showCalendar && (
                <div className="calendar" style={{ height: "auto", backgroundColor: "yellow" }}>
                    <Year year={year} setYear={year => setYear(year)} />
                    <Month month={month - 1} setMonth={month => setMonth(month + 1)} />
                    <Days year={year} month={month - 1} setDate={date => setDate(date)} />
                </div>
            )
            }
        </div>
    );
}

export default CtrlCodeCalendar;