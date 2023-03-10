import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onOk} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button onClick={props.onOk}>Ok</Button>
      </footer>
    </Card>
  );
};

function ErrorModel(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onOk={props.onOk} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onOk={props.onOk}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}
export default ErrorModel;
