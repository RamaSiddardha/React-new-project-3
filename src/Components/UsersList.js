import Card from "./UI/Card";
import classes from "./UsersList.module.css";

function UserList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name}({user.age} Years old){" "}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
