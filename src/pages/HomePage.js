import { useEffect, useState } from "react";
import User from "../components/User";

export default function HomePage() {
  const [users, setUsers] = useState([]); // state to handle the data (users)
  // users: name of the state
  // setUsers: name of the function to set the state

  //the side effect - fetch users
  useEffect(() => {
    getData();
  }, []); // <--- "[]" VERY IMPORTANT!!!

  async function getData() {
    const response = await fetch(
      "https://race-rest-default-rtdb.firebaseio.com/users.json"
    ); // read all users from firebase
    const data = await response.json();
    const array = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
    setUsers(array); // set the state with fetched data
  }

  return (
    <section className="page">
      <h1>Users</h1>
      <section className="grid">
        {users.map(userObj => (
          <User user={userObj} key={userObj.id} />
        ))}
      </section>
    </section>
  );
}
