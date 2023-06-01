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
                    <b style={{ color: "crimson" }}>Name</b> - {user.name}{" "}
                    <b style={{ color: "crimson" }}>Age </b>- {user.age}
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
