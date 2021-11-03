import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { DateTime } from 'luxon';
import { getHabits, saveHabits } from '../../utils/localStorage';
import Buttons from '../Buttons';

const Tracker = () => {
    const [buttonState, setButtonState] = useState('add');
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

    const tableBodyHandler = () => {
        if (formState === 'edit') {
            return (
                <tbody>
                    {habits.map((habit, i) =>
                        <tr key={i}>
                            <th scope="row" id={i}>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder={habit} onChange={handleChange} habit={habit} />
                                    </Form.Group>
                                </Form>
                            </th>
                            {daysOfTheWeek.map((day, i) =>
                                <td className="text-center" key={i}><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                            )}
                        </tr>
                    )}
                </tbody>
            );
        }

        if (formState === 'delete') {
            const deleteHabit = (e) => {
                const index = parseInt(e.target.attributes.i.textContent);
                const tempArr = [...habits];
                tempArr.splice(index, 1);
                setHabitsState(tempArr);
                saveHabits(tempArr);
                if(tempArr.length === 0) {
                    setButtonState('add')
                }
            };
            return (
                <tbody>
                    {habits.map((habit, i) =>
                        <tr key={i}>
                            <th scope="row" className="d-flex justify-content-between">
                                {habit}:
                                <Button variant="outline-dark" className="btn btn-outline-dark" onClick={deleteHabit} i={i}>delete.</Button>
                            </th>

                            {daysOfTheWeek.map((day, i) =>
                                <td className="text-center" key={i}><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                            )}
                        </tr>
                    )}
                </tbody>
            );
        }

        if (formState === '') {
            return (
                <tbody>
                    {habits.map((habit, i) =>
                        <tr key={i}>
                            <th scope="row">{habit}:</th>
                            {daysOfTheWeek.map((day, i) =>
                                <td className="text-center" key={i}><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                            )}
                        </tr>
                    )}
                </tbody>
            );
        }
    }

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
                {tableBodyHandler()}
            </table>
            <div id="buttonDiv" className="container justify-content-center w-25">
                {habits.length === 0 && (
                    <div className="row">
                        <p className="text-center">You haven't added any habits yet :(</p>
                    </div>
                )}
                <div className="row">
                    <Buttons 
                        buttonState={buttonState} 
                        setButtonState={setButtonState} 
                        setFormValueState={setFormValueState} 
                        handleChange={handleChange}
                    />
                </div>

            </div>
        </>
    );
};



export default Tracker;