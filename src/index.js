import React, { useState } from "react";
import ReactDOM from "react-dom";

import CtrlCodeCalendar from "./ctrl-code-Calendar";

function Index(props) {

    let initialDate = new Date();

    const [year, setYear] = useState(initialDate.getFullYear());
    const [month, setMonth] = useState(initialDate.getMonth());
    const [date, setDate] = useState(initialDate.getDate());

    console.log('the fields are', date, month, year);

    return (

        <CtrlCodeCalendar
            width="300px"
            date={date}
            month={month}
            year={year}
            setDate={date => setDate(date)}
            setMonth={month => setMonth(month)}
            setYear={year => setYear(year)}
        />
    )
}

ReactDOM.render(<Index />,
    document.getElementById('root'));