import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { DateTime } from 'luxon';


const Tracker = () => {
    const [buttonState, setButtonState] = useState('');
    const [formValue, setFormValueState] = useState('');
    const [formState, setFormState] = useState('');
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const [habits] = useState(['Morning Routine', 'Exercise', 'Dog Training', 'Water', 'Cleaning', 'Music', 'Meditation', 'Languages', 'Reading', 'Night Routine']);

    const dayOfWeek = DateTime.local().weekday;
    const month = DateTime.local().month;
    const date = DateTime.local().day;

    const handleChange = (e) => {
        if (buttonState === 'add') {
            setFormValueState(e.target.value)
        }
        if (buttonState === 'edit') {
            const oldValue =
                console.log(e.target.id)
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

        const saveButtonHandler = () => {
            if (buttonState === 'add') {
                habits.push(formValue)
            }
            if (buttonState === 'edit') {
                setFormState('');
            }
            setButtonState('');
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
        }

        return (
            <>
                <Button variant="outline-dark" className="mx-1" id="add-btn" onClick={addButtonHandler}>add.</Button>
                <Button variant="outline-dark" className="btn btn-outline-dark mx-1" id="edit-btn" onClick={editButtonHandler}>edit.</Button>
                <Button variant="outline-dark" className="btn btn-outline-dark mx-1" id="delete-btn">delete.</Button>
            </>
        );

    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>Task:</th>
                        {daysOfTheWeek.map((day, i) =>
                            <th scope='col' className="text-center" key={i}>{day}: <span id={i + 1}>{dayOfWeek === 1 ? `${month}/ ${date - i}` : `${month}/ ${date - dayOfWeek + 1 + i}`}</span></th>
                        )}
                    </tr>
                </thead>
                {formState ? (
                    <tbody>
                        {habits.map((habit, i) =>
                            <tr key={i}>
                                <th scope="row">
                                    <Form id={i}>
                                        <Form.Group id={i}>
                                            <Form.Control type="text" placeholder={habit} onChange={handleChange} id={i} />
                                        </Form.Group>
                                    </Form>
                                </th>
                                {daysOfTheWeek.map((day, i) =>
                                    <td className="text-center" key={i}><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                )}
                            </tr>
                        )}
                    </tbody>
                ) : (
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
                )}
            </table>
            <div id="buttonDiv" className="d-flex justify-content-center my-4">
                {buttonHandler()}
            </div>
        </>
    );
};



export default Tracker;