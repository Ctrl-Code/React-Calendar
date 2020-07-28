import React from "react";
import "./css/year.css";

function Year(props) {

    return (
        <div className="ctrl-code-year">

            <div
                className="arrow"
                onClick={() => props.setYear(props.year - 1)}>
                &lt;
                    </div>

            <div className="text">
                {props.year}
            </div>

            <div
                className="arrow"
                onClick={() => props.setYear(props.year + 1)}>
                &gt;
                    </div>
        </div>
    );
}

export default Year;