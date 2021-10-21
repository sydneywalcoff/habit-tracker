import React from 'react';

const Tracker = () => {
    const daysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const habits = ['Morning Routine', 'Exercise', 'Dog Training', 'Water', 'Cleaning', 'Music', 'Meditation', 'Languages', 'Reading', 'Night Routine'];
    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope='col'>Task</th>
                        {daysOfTheWeek.map(day =>
                            <th scope='col' className="text-center">{day} <span id="1"></span></th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {habits.map(habit =>
                        <tr>
                            <th scope="row">{habit}</th>
                            {daysOfTheWeek.map(day =>
                                <td className="text-center"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                            )}
                        </tr>
                    )}  
                </tbody>
            </table>
            <div id="buttonDiv" className="d-flex justify-content-center my-4">
                <button className="btn btn-outline-dark mx-1" id="add-btn">add.</button>
                <button className="btn btn-outline-dark mx-1" id="edit-btn">edit.</button>
                <button className="btn btn-outline-dark mx-1" id="delete-btn">delete.</button>
            </div>
        </>
    );
};


export default Tracker;