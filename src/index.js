import React, { useState } from "react";
import ReactDOM from "react-dom";

import CtrlCodeCalendar from "./ctrl-code-Calendar";

function Index(props) {

    const [epoch, setEpoch] = useState(new Date().getTime());

    return (
        <CtrlCodeCalendar
            epoch={epoch}
            setEpoch={val => setEpoch(val)}
        />
    );

}

ReactDOM.render(<Index />,
    document.getElementById('root'));