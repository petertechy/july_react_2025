import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByParam, increment, saveStudent } from "../redux/counterSlice";

const AboutPage = () => {
  const [student, setstudent] = useState("")
  const [age, setage] = useState(0)
  const count = useSelector(state=>state.counterSlice.count)
  // console.log(count)

  let dispatch = useDispatch()
  return (
    <>
      <div className="mx-auto col-7 rounded-3 shadow-sm p-3 my-4">
        <h1>The Count is {count}</h1>
        <div className="col-10 border border-success shadow p-3 mx-auto rounded-4">
          <h1>Save Student Form</h1>

          <input className="form-control mb-2" placeholder="enter your name" onChange={(e)=>setstudent(e.target.value)}  type="text" />
          <input className="form-control mb-2" placeholder="enter your age" onChange={(e)=>setage(e.target.value)}  type="text" />
        <button className="btn btn-success w-100 my-2" onClick={()=>dispatch(saveStudent({student,age}))}>Save Student</button>
        </div>

        <button className="btn btn-success w-100 my-2" onClick={()=>dispatch(increment())}>Increase Value</button>
        <button className="btn btn-success w-100 my-2" onClick={()=>dispatch(decrement())}>Decrease Value</button>
        <button className="btn btn-success w-100 my-2" onClick={()=>dispatch(increaseByParam(5))}>Increase By Value</button>
      </div>
    </>
  );
};

export default AboutPage;
