import { DateTime } from 'luxon';

const dayOfWeek = DateTime.local().weekday;
const month = DateTime.local().month;
const date = DateTime.local().day;

const formatDate = (i) => {
    let formattedDate;
    dayOfWeek === 1 ? formattedDate = `${month}/ ${date - i}` : formattedDate =`${month}/ ${date - dayOfWeek + 1 + i}`

    return formattedDate;
};

export {
    formatDate
}