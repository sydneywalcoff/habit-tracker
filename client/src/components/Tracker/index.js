import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { DateTime } from 'luxon';
import { getHabits, saveHabits } from '../../utils/localStorage';

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

    const buttonHandler = () => {

        const addButtonHandler = () => {
            setButtonState('add');
        };

        const editButtonHandler = () => {
            setButtonState('edit');
            setFormState('edit');
        };

        const deleteButtonHandler = () => {
            setFormState('delete');
            setButtonState('delete');
        };

        const saveButtonHandler = () => {
            if (buttonState === 'add') {
                let tempArr = [...habits];
                tempArr.push(formValue)
                setHabitsState(tempArr)
                saveHabits(tempArr);
            }
            if (buttonState === 'edit') {
                setFormState('');
            }
            if(buttonState === 'delete') {

            }
            setButtonState('');
        };

        const doneHandler = () => {
            setButtonState('');
            setFormState('');
        };

        if (buttonState === 'add') {
            return (
                <>
                    <Form>
                        <Form.Group>
                            <Form.Control as="textarea" rows={2} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                    <Button variant="outline-dark" className="mx-1" id="save-btn" onClick={saveButtonHandler}>save.</Button>
                </>
            );
        } else if (buttonState === 'edit') {
            return (
                <Button variant="outline-dark" className="mx-1" id="save-btn" onClick={saveButtonHandler}>save.</Button>
            );
        } else if (buttonState === 'delete') {
            return (
                <Button variant="outline-dark" className="mx-1" onClick={doneHandler}>done.</Button>
            );
        }

        return (
            <>
                <Button variant="outline-dark" className="mx-1" id="add-btn" onClick={addButtonHandler}>add.</Button>
                <Button variant="outline-dark" className="btn btn-outline-dark mx-1" id="edit-btn" onClick={editButtonHandler}>edit.</Button>
                <Button variant="outline-dark" className="btn btn-outline-dark mx-1" onClick={deleteButtonHandler}>delete.</Button>
            </>
        );

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

        if(formState === 'delete') {
            const deleteHabit = (e) => {
                const index = parseInt(e.target.attributes.i.textContent);
                const tempArr = [...habits];
                tempArr.splice(index,1);
                setHabitsState(tempArr);
                saveHabits(tempArr);
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
            <div id="buttonDiv" className="d-flex justify-content-center my-4">
                {buttonHandler()}
            </div>
        </>
    );
};



export default Tracker;