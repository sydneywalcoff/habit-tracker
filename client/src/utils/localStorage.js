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

export const saveProgress = (weeklyHabitProgArr) => {
    if(weeklyHabitProgArr.length) {
        localStorage.setItem('weekly progress', JSON.stringify(weeklyHabitProgArr));
    } else {
        localStorage.removeItem('weekly progress');
    }
};

export const getProgress = () => {
    const weeklyHabitProgArr = localStorage.getItem('weekly progress') ? JSON.parse(localStorage.getItem('weekly progress')) : [];
    return weeklyHabitProgArr;
};