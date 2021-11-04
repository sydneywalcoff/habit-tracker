import React from 'react';
import { Button, Form } from 'react-bootstrap';

const TrackerBody = ({ formState, handleChange, habits, saveHabits, setHabitsState, setButtonState, daysOfTheWeek, date, year, weekProgress }) => {
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
                        {daysOfTheWeek.map((day, j) =>
                            <td className="text-center" key={j}><input className="form-check-input" type="checkbox" value=""/></td>
                        )}
                    </tr>
                )}
            </tbody>
        );
    }
    const deleteHabitButton = (i) => {
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
                <Button variant="outline-dark" className="btn btn-outline-dark" onClick={deleteHabit} i={i}>delete.</Button>
            );
        }
    };

    // save for later
    // checked={weekProgress.days[j].habits[i]}


    return (
        <tbody>
            {habits.map((habit, i) =>
                <tr key={i}>
                    <th scope="row" className="d-flex justify-content-between">
                        {habit}:
                        {deleteHabitButton(i)}
                    </th>
                    {daysOfTheWeek.map((day, j) =>
                        <td className="text-center" key={j}><input className="form-check-input" type="checkbox" value="" id={`${date(i)}/${year}`} /></td>
                    )}
                </tr>
            )}
        </tbody>
    );
};

export default TrackerBody;