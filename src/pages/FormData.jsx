import React, { useState } from "react";

const FormData = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [allUsers, setallUsers] = useState([])

  const handleSubmit = () => {
    const userObject = {
      firstname,
      lastname,
      email,
      password,
    };

    console.log(userObject);

    setallUsers([...allUsers,userObject])

  };
  return (
    <>
        <div className="mx-auto col-7 rounded-3 p-3 my-4">
      <h1>Form to Collect User Info</h1>
      <input
        type="text"
        placeholder="first name"
        className="form-control mb-3"
        onChange={(e) => setfirstname(e.target.value)}
      />
      <input
        type="text"
        placeholder="last name"
        className="form-control mb-3"
        onChange={(e) => setlastname(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        className="form-control mb-3"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        className="form-control mb-3"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={handleSubmit} className="btn btn-success w-100">
        Submit
      </button>
    </div>

    <div>
        {allUsers.map((user)=>(
            <div>
                <h1>{user.firstname}</h1>
                <h1>{user.lastname}</h1>
                <h1>{user.email}</h1>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        ))}
    </div>
    </>
  );
};

export default FormData;
