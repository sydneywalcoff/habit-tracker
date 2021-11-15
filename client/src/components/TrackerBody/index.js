import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { saveProgress, getProgress } from '../../utils/localStorage';

const TrackerBody = ({ formState, handleChange, habits, saveHabits, setHabitsState, setButtonState, daysOfTheWeek, date, year, weekProgress }) => {
    const [weeklyHabitState, setWeeklyHabitState] = useState(getProgress());
    const handleCheckboxChange = (e) => {
        const dayOfWeekInd = e.target.attributes.j.value;
        const habitInd = e.target.attributes.i.value;
        const tempArr = [...weeklyHabitState];
        const selectedHabit = tempArr[dayOfWeekInd].habits[habitInd];
        selectedHabit.complete = !selectedHabit.complete
        setWeeklyHabitState(tempArr);
        saveProgress(tempArr);
    };

    console.log(weeklyHabitState[0].habits[0].complete);

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
                            <td className="text-center" key={j}><input className="form-check-input" type="checkbox" value="" /></td>
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

    return (
        <tbody>
            {habits.map((habit, i) =>
                <tr key={i}>
                    <th scope="row" className="d-flex justify-content-between">
                        {habit}:
                        {deleteHabitButton(i)}
                    </th>
                    {daysOfTheWeek.map((day, j) =>
                        <td className="text-center" key={j}><input className="form-check-input" type="checkbox" value="" id={`${date(i)}/${year}`} onChange={handleCheckboxChange} i={i} j={j} checked={weeklyHabitState[j].habits[i].complete}/></td>
                    )}
                </tr>
            )}
        </tbody>
    );
};

export default TrackerBody;