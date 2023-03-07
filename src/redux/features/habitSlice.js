import { createSlice } from "@reduxjs/toolkit";
let id = 1; 

// creating the habit slice
export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    //action to add habit 
    addHabit: (state, action) => {
      let today=new Date();
      // assigning the past 7th day to handle the previous 6 days
      today.setDate(today.getDate()-6);
      // getting the current day,month and year 
      let day=today.getDate()
      const month= today.getMonth();
      const year =today.getFullYear();
      const week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let weekDay=today.getDay();
      // creating the habit with name and status of past 6 days
      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          {
            id: 0,
            day: week[weekDay%7],
            dd:day,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 1,
            day:week[(weekDay+1)%7],
            dd:day+1,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 2,
            day:week[(weekDay+2)%7],
            dd:day+2,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 3,
            day:week[(weekDay+3)%7],
            dd:day+3,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 4,
            day:week[(weekDay+4)%7],
            dd:day+4,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 5,
            day:week[(weekDay+5)%7],
            dd:day+5,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 6,
            day:week[(weekDay+6)%7],
            dd:day+6,
            mm:month,
            yyyy:year,
            isDone: "",
          },
        ],
      };
      const tempHabits = [...state, habit];
      return tempHabits;
    },
   
    // deleting the habit 
    deleteHabit: (state, action) => {
      const tempHabits = state.filter((habit) => habit.id !== action.payload);
      return tempHabits;
    },
    // marking the status of the habit completed
    habitDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone=true;
        }
      }
      return tempHabits;
    },
    // marking the status of the habit not completed
    habitUnDone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone=false;
        }
      }
      return tempHabits;
    },
    // no action was taken on the habit
    habitNone: (state, action) => {
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone="";
        }
      }
      return tempHabits;
  },
}});

// Action creators are generated for each case reducer function
export const { addHabit, deleteHabit,habitDone,habitUnDone,habitNone } = habitSlice.actions;

export default habitSlice.reducer;
