import React, { useState } from "react";
import "./css/index.css";

import Month from "./month";
import Year from "./year";
import Days from "./days";

function CtrlCodeCalendar(props) {
    let [showCalendar, setShowCalendar] = useState(true);
    
    let toggleShowCalendar = event => {
        setShowCalendar(showCalendar ? false : true);
        event.stopPropagation();
    }

    let inputFieldValue = () => {
        let { date, month, year } = props;

        if (props.date < 10) {
            date = "0" + props.date;
        }

        if (props.month < 10) {
            month = "0" + props.month;
        }

        return `${date}/${month}/${year}`;
    };

    return (
        <div className="ctrl-code-box" style={{ width: props.width }}>
            <input
                onClick={toggleShowCalendar}
                type="text"
                readOnly={true}
                onChange={event => props.setDate(event.target.value)}
                className="inputField"
                value={inputFieldValue()}
            />

            {/* CALENDAR DIV */}
            {showCalendar && (
                <div className="calendar" style={{ height: "auto", backgroundColor: "yellow" }}>
                    <Year year={props.year} setYear={props.setYear} />
                    <Month month={props.month} setMonth={props.setMonth} />
                    <Days year={props.year} month={props.month} setDate={props.setDate} />
                </div>
            )
            }
        </div>
    );
}

export default CtrlCodeCalendar;