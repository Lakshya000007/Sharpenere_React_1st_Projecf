import { Button } from "react-bootstrap";
import "./Modals.css";
import Card from "../../UI/Card/Card";
import ReactDOM from "react-dom";

const Overlay = ({ handleError }) => {
  const handleClose = () => {
    handleError(false);
  };

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "relative" }}
      >
        <div className="card-style">
          <Card>
            <div>
              <div style={{ fontSize: "20px" }}>
                Please Enter a Valid Name and Age (Non-empty values)
              </div>
              <div>
                <Button
                  onClick={handleClose}
                  style={{
                    fontSize: "20px",
                    marginTop: "10px",
                    color: "red",
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export const Modals = ({ handleError }) => {
  return ReactDOM.createPortal(
    <Overlay handleError={handleError} />,
    document.getElementById("overlay")
  );
};

export default Modals;
