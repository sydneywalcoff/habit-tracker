import React, { useState } from 'react';
import { getHabits, saveHabits } from '../../utils/localStorage';
import { formatDate, weekNumber, year, dayOfWeek } from '../../utils/dateFormat'
import Buttons from '../Buttons';
import TrackerBody from '../TrackerBody';

const Tracker = () => {
    const [buttonState, setButtonState] = useState('');
    const [formValue, setFormValueState] = useState('');
    const [formState, setFormState] = useState('');
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const [habits, setHabitsState] = useState(getHabits());
    const [weekProgress, setWeekProgress] = useState({});
    
    const handleChange = (e) => {
        if (buttonState === 'add') {
            setFormValueState(e.target.value)
        }
        if (buttonState === 'edit') {
            const newValue = e.target.value;
            const oldValue = e.target.attributes.habit.textContent;

            const arrInd = habits.findIndex(el => el === oldValue);
            let tempArr = [...habits];
            tempArr[arrInd] = newValue;
            setHabitsState(tempArr);
            saveHabits(tempArr);
        }
    };
    const weekProgressObj = {
        weekNumber: weekNumber,
        dayOfWeek: dayOfWeek,
        days: []
    };
    const tempArr = [...weekProgressObj.days]
    daysOfTheWeek.forEach(day => {
        const habitArr = [];
        const dailyObj = {
            day: day,
            habits: habitArr
        };
        habits.forEach(habit => {
            const habitObj = {
                habit: habit,
                complete: false
            };
            habitArr.push(habitObj)
        })
        
        tempArr.push(dailyObj)
    })

    weekProgressObj.days = tempArr;
    console.log(weekProgressObj)

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>Habit:</th>
                        {daysOfTheWeek.map((day, i) =>
                            <th scope='col' className="text-center" key={i}>{day}: <span id={day}>{formatDate(i)}</span></th>
                        )}
                    </tr>
                </thead>
                <TrackerBody 
                    formState={formState}
                    handleChange={handleChange}
                    habits ={habits}
                    saveHabits={saveHabits}
                    setHabitsState={setHabitsState}
                    setButtonState ={setButtonState}
                    daysOfTheWeek= {daysOfTheWeek}
                    date = {formatDate}
                    year = {year}
                    weekProgress = {weekProgressObj}
                />
            </table>
            <div id="buttonDiv" className="container justify-content-center w-25">
                {habits.length === 0 && (
                    <div className="row">
                        <p className="text-center my-5">You haven't added any habits yet :(</p>
                    </div>
                )}
                <div className="row">
                    <Buttons 
                        buttonState={buttonState} 
                        setButtonState={setButtonState} 
                        setFormState={setFormState} 
                        handleChange={handleChange}
                        formValue={formValue}
                        habits = {habits}
                        saveHabits={saveHabits}
                        setHabitsState={setHabitsState}
                    />
                </div>

            </div>
        </>
    );
};



export default Tracker;