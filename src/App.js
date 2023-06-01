import React, { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import Card from "./UI/Card/Card";
import Modals from "./components/Modals/Modals.js";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleUsers = (data) => {
    setUsers([...users, data]);
  };

  const handleError = (err) => {
    setIsError(err);
  };

  if (users.length === 0) {
    return (
      <>
        {isError && <Modals handleError={handleError} />}
        <div className={`container ${isError && "error"}`}>
          <Form
            handleError={handleError}
            handleUsers={handleUsers}
            users={users}
            isError={isError}
          />
        </div>
        <div className={`data ${isError && "error"}`}>
          <Card>
            <h3>Start Adding Users!</h3>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        {isError && <Modals handleError={handleError} />}

        <div className={`container ${isError && "error"}`}>
          <Form
            handleError={handleError}
            handleUsers={handleUsers}
            users={users}
            isError={isError}
          />
        </div>

        <div className={`data ${isError && "error"}`}>
          <Card>
            <ul>
              {users.map((user) => {
                return (
                  <li
                    style={{
                      listStyleType: "none",
                      color: "blue",
                      fontSize: "20px",
                      marginBottom: "5px",
                    }}
                  >
                    <b style={{ color: "crimson", fontSize: "15px" }}>Name</b> -{" "}
                    <i style={{ color: "green", fontSize: "12px" }}>
                      {user.name}
                    </i>{" "}
                    <b style={{ color: "crimson", fontSize: "15px" }}>Age </b>-{" "}
                    <i style={{ color: "green", fontSize: "12px" }}>
                      {user.age}
                    </i>{" "}
                    <b style={{ color: "crimson", fontSize: "15px" }}>
                      College Name{" "}
                    </b>
                    -{" "}
                    <i style={{ color: "green", fontSize: "12px" }}>
                      {user.collegeName}
                    </i>{" "}
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </>
    );
  }
};

export default App;
