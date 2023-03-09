import classes from './Button.module.css'

function Button(props) {
    return <button className={classes.button} type={props.type} onClick={props.Onclick}>{props.children}</button>
}

export default Button