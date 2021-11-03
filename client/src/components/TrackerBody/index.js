import React from 'react';
import { Button, Form } from 'react-bootstrap';

const TrackerBody = ({ formState, handleChange, habits, saveHabits, setHabitsState, setButtonState, daysOfTheWeek }) => {
    console.log(formState)
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
            if (tempArr.length === 0) {
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
};

export default TrackerBody;