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
        $("#greeting").text('good morning')
    } else if (12 <= currentHour && currentHour< 18) {
        $("#greeting").text('good afternoon')
    } else if (18 <= currentHour) {
        $("#greeting").text('good evening')
    }

    // add dates to tracker
    const dayOfWeek = dt.weekday;
    const month = dt.month;
    const day = dt.day;
    if (dayOfWeek === 1) {
        $("#1").text(`${month}/${day}`)
        $("#2").text(`${month}/${day + 1}`)
        $("#3").text(`${month}/${day + 2}`)
        $("#4").text(`${month}/${day + 3}`)
        $("#5").text(`${month}/${day + 4}`)
        $("#6").text(`${month}/${day + 5}`)
        $("#7").text(`${month}/${day + 6}`)
    } else if (dayOfWeek !== 1) {
        for (let i = 1; i < 8; i++) {
            const difference = dayOfWeek - i;
            $("#" + i).text(`${month}/${day - difference}`)
        }
    } else {
        console.log('something is wrong :(')
    }
    return (
        <>
            <h5 className="text-center"><span id="greeting"></span>, sydney!</h5>
            <h6 className="text-center">today is <span id="currentDay"></span>.</h6>
        </>
    );
};

export default Greeting;