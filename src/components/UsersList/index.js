import { useSelector, useDispatch } from "react-redux";
import { sortUsers } from "../../actions/user_actions";
import useInfiniteScroll from "../../hooks/useInfinteScroll";
import UserCard from "../UserCard";
import { LoadingIcon } from "../../icons";
import style from "./style.module.css";

const UsersList = () => {
  const { users, loading } = useSelector((state) => state);
  const { currentCount, lastElementRef } = useInfiniteScroll();
  const dispatch = useDispatch();

  const onClick = ({ target }) => dispatch(sortUsers(target.name));

  return loading ? (
    <div className={style.loadingIcon}>
      <LoadingIcon />
    </div>
  ) : (
    <div>
      <div className={style.container}>
        <div className={style.usersSortTab}>
          <button className={style.actionButton} onClick={onClick} name="name">
            Name
          </button>
          <button className={style.actionButton} onClick={onClick} name="email">
            Email
          </button>
          <button className={style.actionButton} onClick={onClick} name="age">
            Age
          </button>
        </div>
        <div>
          {users?.slice(0, currentCount).map((user, i, rendredUsers) => {
            if (rendredUsers.length === i + 1) {
              return <UserCard user={user} key={user.id} ref={lastElementRef} />;
            }
            return <UserCard user={user} key={user.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
