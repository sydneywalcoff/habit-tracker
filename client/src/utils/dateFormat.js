import { DateTime } from 'luxon';

const dayOfWeek = DateTime.local().weekday;
const month = DateTime.local().month;
const date = DateTime.local().day;
const weekNumber = DateTime.local().weekNumber;
const year = DateTime.local().year;

const months = {
    '1': '31',
    '2': '28',
    '3': '31',
    '4': '30',
    '5': '31',
    '6': '30',
    '7': '31',
    '8': '31',
    '9': '30',
    '10': '31',
    '11': '30',
    '12': '31'
}

const formatDate = (i) => {
    let formattedDate;
    if(dayOfWeek === 1) {
        formattedDate = `${month}/${date - i}`
    } else {
        if((date - dayOfWeek + 1 + i) === 0) {
            formattedDate = `${month -1 }/${months[month-1]}`
        } else if ((date - dayOfWeek + 1 + i) > months[month]) {
            // accomodates for new year
            if(month+1 > 12)  {
                formattedDate = `1/${date - dayOfWeek + 1 + i - parseInt(months[12])}`
            } else {
                formattedDate = `${month+1}/${date - dayOfWeek + 1 + i - parseInt(months[month])}`
            }
        } else {
            formattedDate =`${month}/${date - dayOfWeek + 1 + i}`
        }
    }
    
    return formattedDate;
};

export {
    formatDate,
    weekNumber,
    year,
    dayOfWeek
}