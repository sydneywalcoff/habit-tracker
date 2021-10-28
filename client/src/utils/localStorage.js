export const getHabits = () => {
    const habitsArr = localStorage.getItem('habits') ? JSON.parse(localStorage.getItem('habits')) : [];
    return habitsArr;
};

export const saveHabits = (habitArr) => {
    if(habitArr.length) {
        localStorage.setItem('habits', JSON.stringify(habitArr));
    } else {
        localStorage.removeItem('habits');
    }
};
