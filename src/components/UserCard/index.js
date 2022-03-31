import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import style from "./style.module.css";

const UserCard = forwardRef(({ user }, ref) => {
  const { name, email, age, id } = user;
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    dispatch(
      updateUser({
        id,
        ...user,
        [target.name]: target.value,
      })
    );
  };

  return (
    <div className={style.cardContainer} ref={ref}>
      <div className={style.inputContainer}>
        <input className={style.input} onChange={onChange} type="text" name="name" value={name} />
      </div>
      <div className={style.inputContainer}>
        <input className={style.input} onChange={onChange} type="text" name="email" value={email} />
      </div>
      <div className={style.inputContainer}>
        <input className={style.input} onChange={onChange} type="text" name="age" value={age} />
      </div>
    </div>
  );
});

export default UserCard;
