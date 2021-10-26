import React from 'react';
import $ from 'jquery'
import { DateTime } from 'luxon';

const Greeting = () => {
    // grab currentDay
    const dt = DateTime.local();
    const weekDay = dt.weekdayLong.toLowerCase();
    $("#currentDay").text(weekDay);
    let greeting;
    // update greeting
    const currentHour = dt.hour;
    if (currentHour < 12) {
        greeting = 'morning'
    } else if (12 <= currentHour && currentHour < 18) {
        greeting = 'afternoon'
    } else if (18 <= currentHour) {
        greeting = 'evening'
    }
    return ( 
        <>
            <h5 className = "text-center">good <span id = "greeting">{greeting}</span>, sydney!</h5>
            <h6 className = "text-center">today is <span id = "currentDay">{weekDay}</span>.</h6>
        </>
    );
};

export default Greeting;