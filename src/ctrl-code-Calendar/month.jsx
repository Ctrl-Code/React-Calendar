import React from "react";
import "./css/month.css";

const functions = require("./functions");
const constants = require("./constants");

function Month(props) {

    return (
        <div className="ctrl-code-month">
            <div
                className="arrow"
                onClick={() => props.setMonth(functions.clickArrowLeft(props.month))}>
                &lt;
                    </div>

            <div className="text">
                {constants.months[props.month]}
            </div>

            <div
                className="arrow"
                onClick={() => props.setMonth(functions.clickArrowRight(props.month))}>
                &gt;
                    </div>
        </div>
    );
}

export default Month;