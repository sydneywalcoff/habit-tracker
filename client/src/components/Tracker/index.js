import React from 'react';
import { Button, Form } from 'react-bootstrap'
import { DateTime } from 'luxon';
import $ from 'jquery';


const Tracker = () => {
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const habits = ['Morning Routine', 'Exercise', 'Dog Training', 'Water', 'Cleaning', 'Music', 'Meditation', 'Languages', 'Reading', 'Night Routine'];

    const dayOfWeek = DateTime.local().weekday;
    const month = DateTime.local().month;
    const date = DateTime.local().day;
    
    const addActionButtons = () => {        
        const addButtonHandler = () => {
            // clear buttonDiv and replace with text box and button
            const buttonDiv = $('#buttonDiv');
            const textBox = $('<textarea>');
            buttonDiv.empty();
            buttonDiv.append(textBox);
            const saveButton = $('<button>').addClass('btn btn-outline-dark mx-1').text('save.');
            buttonDiv.append(saveButton);
            
        };
        return (
            <>
                <Button variant="outline-dark" className="mx-1" id="add-btn" onClick = {addButtonHandler}>add.</Button>
                <Button variant="outline-dark" className="btn btn-outline-dark mx-1" id="edit-btn" >edit.</Button>
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
            </table>
            <div id="buttonDiv" className="d-flex justify-content-center my-4">
                {addActionButtons()}
            </div>
        </>
    );
};



export default Tracker;