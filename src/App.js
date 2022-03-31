import { useEffect } from "react";
import { fetchUsers } from "./api";
import { useDispatch } from "react-redux";
import UsersList from "./components/UsersList";
import { addUsersList, setLoading } from "./actions/user_actions";

function App() {
  const dispatch = useDispatch();

  const getUsers = async () => {
    const users = await fetchUsers();
    dispatch(addUsersList(users));
  };

  useEffect(() => {
    dispatch(setLoading());
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
