import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Habit = ({habit}) => {
  let countDone=0;
  //loop for getting habit done count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if(habit.weekLog[i].isDone===true){
      countDone++;
    }
  }
  
  // call use navigate hook from react-router-dom in a navigate variable 
  const navigate=useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // function call after click delete button on habit list
  const handleDelete=()=>{
    dispatch(deleteHabit(habit.id));
    toast.success("your habit deleted");
  }

  // this function call after click week view button
  // this function used for set current habit id to localstorage and navigate to weekview page
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }

  
  return (
    <div className="habit shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <div className="habit-left">
        <i className="fa-solid fa-layer-group"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{7} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
