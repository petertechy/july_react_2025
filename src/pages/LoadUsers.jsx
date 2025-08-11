import axios from "axios";
import React, { useEffect, useState } from "react";

const LoadUsers = () => {
  const endpoint = "https://api.github.com/users";
  const endpoint2 = "https://jsonplaceholder.typicode.com/posts";
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(false);

  const handleFetch = () => {
    // console.log("helllooooo")
    // axios.get(endpoint)
    axios
      .get(endpoint2)
      .then((response) => {
        console.log(response.data);
        setisloading(true);
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(response)
  };

  useEffect(() => {
    handleFetch()
  }, [])
  

  return (
    <div>
      <h1>Fetch Users</h1>
      {/* <button onClick={handleFetch}>Fetch User</button> */}

      {/* <div>
            {data.map((user, index)=>(
                <div key={index}>
                    <h1>{user.login}</h1>
                    <img src={user.avatar_url} alt="" />
                </div>
            ))}
        </div> */}
      <div>
        {!isloading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          data.map((user, index) => (
            <div key={index}>
              <h1>{user.title}</h1>
              <p>{user.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LoadUsers;
