import { useState } from "react";
import Card from "../../UI/Card/Card";
import "./Form.css";

const Form = ({ handleUsers, handleError }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || age === undefined || age <= 0) {
      handleError(true);
    } else {
      handleError(false);
      const newData = { name: name, age: age };
      handleUsers(newData);
    }
  };

  return (
    <>
      <Card>
        <form action="" onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              onChange={handleName}
              value={name}
            />
          </div>
          <div className="age">
            <label htmlFor="age">
              <b>Age (in years)</b>
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter Age"
              onChange={handleAge}
              value={age}
            />
          </div>
          <div className="button">
            <input type="submit" id="button" />
          </div>
        </form>
      </Card>
    </>
  );
};

export default Form;
