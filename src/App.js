import React, { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";
import Card from "./UI/Card/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleUsers = (data) => {
    setUsers([...users, data]);
  };

  const handleError = (err) => {
    setIsError(err);
  };

  const handleClose = () => {
    setIsError(false);
  };

  if (isError) {
    return (
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Card>
          <Modal.Dialog>
            <Modal.Header style={{ fontSize: "20px" }}>
              Please Enter a Valid Name and Age (Non-empty values)
            </Modal.Header>
            <Modal.Footer>
              <Button
                onClick={handleClose}
                style={{ fontSize: "20px", marginTop: "10px", color: "red" }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Card>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <>
        <div className="container">
          <Form
            handleError={handleError}
            handleUsers={handleUsers}
            users={users}
          />
        </div>

        <div className="data">
          <Card>
            <h3>Start Adding Users!</h3>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <Form
            handleError={handleError}
            handleUsers={handleUsers}
            users={users}
          />
        </div>

        <div className="data">
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
