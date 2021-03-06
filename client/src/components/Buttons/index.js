import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Buttons = ({ buttonState, setButtonState, setFormState, handleChange, habits, formValue, setHabitsState, saveHabits }) => {
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
            const habitObj = {
                habit: formValue,
                complete: false
            };
            console.log(habitObj)
            tempArr.push(formValue);
            setHabitsState(tempArr)
            saveHabits(tempArr);
        }
        setFormState('');
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

export default Buttons;