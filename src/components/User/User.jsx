/*eslint-disable react/prop-types*/

import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";

const FAKE_USER = {
  name: "Mohamed",
  email: "Mohamed@example.com",
  password: "m123123",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function User({ clearUserData }) {
  let navigate = useNavigate();
  const user = FAKE_USER;

  function handleClick() {
    navigate("/Login");
    clearUserData();
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
