import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

const DayView = ({day}) => {
  // get today date
  const today=new Date();
  // get day from today date
  const todayDay=today.getDay();

  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // get date details from providing date
  const date=new Date(day.yyyy,day.mm,day.dd);
  // function call after click done icon--------------
  const markToDone=()=>{
    // call habit done action from reducer
    dispatch(habitDone(day.id));
  }
  // -------------------------------------------------

  // function call after click undone icon------------
  const markToUnDone=()=>{
    // call habit undone action from reducer
    dispatch(habitUnDone(day.id))
  }
  // --------------------------------------------------

  // function call after click none icon--------------
  const markToNone=()=>{
    // call habit none action from reducer
    dispatch(habitNone(day.id));
  }
  // -------------------------------------------------


  return (
    <div className="day-container shadow-none p-3 mb-5 bg-body-tertiary rounded">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <div className="icon-group">
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
    </div>
    </div>
  );
};

export default DayView;
