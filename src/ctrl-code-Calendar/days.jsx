import React, { useState } from "react";
import "./css/days.css";
import { useEffect } from "react";

let constants = require("./constants");

function Days(props) {

    let limit = useGetStartingDayOfMonth(props.month, props.year);

    let monthDays = ((props.month === 1) && (props.year % 4 === 0)) ? 29 : constants.days[props.month];

    let getWeekDays = () => constants.weekDays.map(eachDay => {
        return (
            <div key={"weekDay" + eachDay}>
                {eachDay.charAt(0)}
            </div>
        );
    });

    let getEmptyBlocks = () => {
        let returnJsx = [];
        if (limit === 0)
            return null;
        else {
            for (let i = 0; i !== limit; ++i)
                returnJsx.push(<div key={props.month + 'emptyBLock' + i} />);
            return returnJsx;
        }
    }

    let getDays = () => {
        let jsxDays = [];
        for (let i = 0; i !== monthDays; ++i) {
            jsxDays.push(
                <div
                    className="dates"
                    key={props.month + i + 1}
                    onClick={() => props.setDate(i + 1)}>
                    {i + 1}
                </div>
            );
        }
        return jsxDays;
    }
    return (
        <div className="ctrl-code-days">

            {/* to get weekdays on the top of the list */}
            {getWeekDays()}

            {/* empty blocks to map the dates of the month
            to the particular day of the week */}
            {getEmptyBlocks()}

            {/* get the dates listing */}
            {getDays()}
        </div>
    );
}

function useGetStartingDayOfMonth(month, year) {

    let [startingDayOfMonth, setStartingDayOfMonth] = useState(0);

    // reducing the calculation by making a user hook
    useEffect(() => {
        let x = new Date();
        x.setUTCHours(0, 0, 0, 0);
        x.setUTCMonth(month);
        x.setUTCFullYear(year);
        x.setUTCDate(1);
        setStartingDayOfMonth(x.getUTCDay());
    }, [month, year]);

    return startingDayOfMonth;
}

export default Days;