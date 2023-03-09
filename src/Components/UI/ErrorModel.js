import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";

function ErrorModel(props) {
  return (
    <div className={classes.backdrop} onClick={props.onOk}>
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
    </div> 
  );
}

export default ErrorModel