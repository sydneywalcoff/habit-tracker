import React from 'react';
// import { luxon } from '../../assets/luxon'
import $ from 'jquery'
import { DateTime } from 'luxon';

const Greeting = () => {
    // grab currentDay
    const dt = DateTime.local();
    const weekDay = dt.weekdayLong.toLowerCase();
    $("#currentDay").text(weekDay);

    // update greeting
    const currentHour = dt.hour;
    if (currentHour < 12) {
        $("#greeting").text('morning')
    } else if (12 <= currentHour && currentHour < 18) {
        $("#greeting").text('afternoon')
    } else if (18 <= currentHour) {
        $("#greeting").text('evening')
    }
    return ( 
        <>
            <h5 className = "text-center">good <span id = "greeting"> </span>, sydney!</h5>
            <h6 className = "text-center">today is <span id = "currentDay"></span>.</h6>
        </>
    );
};

export default Greeting;