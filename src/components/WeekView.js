import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import AddHabit from "./AddHabit";
import { useSelector } from "react-redux";

const WeekView = () => {
  // call use selector hook for getting state from reducer
  let habitsState=useSelector((state)=>state.habits);
  
  // getting habit from habits state acording to local storage id and set it on habit
  let habit={}
  for(let i=0;i<habitsState.length;i++){
    if(habitsState[i].id===Number(localStorage.getItem("id"))){
      habit=habitsState[i];
    }
  }
  
  return (
    <>
      <AddHabit name="Week View" />
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      <h1 className="text-center" style={{textTransform:"uppercase",color:"#f22304"}}>{habit.name}</h1>
      <div className="days-container">
        {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)}
      </div>
      <div className="text-center col-6 mx-auto mt-5 pt-2 p-3">
        <button className="btn btn-primary btn-lg" type="button">
          <Link to="/">Back</Link>
        </button>
      </div>
      </div>
    </>
  );
};

export default WeekView;
