import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { getHabits, saveHabits } from '../../utils/localStorage';
import Buttons from '../Buttons';
import TrackerBody from '../TrackerBody';

const Tracker = () => {
    const [buttonState, setButtonState] = useState('');
    const [formValue, setFormValueState] = useState('');
    const [formState, setFormState] = useState('');
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const [habits, setHabitsState] = useState(getHabits());

    const dayOfWeek = DateTime.local().weekday;
    const month = DateTime.local().month;
    const date = DateTime.local().day;
    
    const handleChange = (e) => {
        if (buttonState === 'add') {
            setFormValueState(e.target.value)
            console.log(formValue)
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

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>Habit:</th>
                        {daysOfTheWeek.map((day, i) =>
                            <th scope='col' className="text-center" key={i}>{day}: <span id={i + 1}>{dayOfWeek === 1 ? `${month}/ ${date - i}` : `${month}/ ${date - dayOfWeek + 1 + i}`}</span></th>
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