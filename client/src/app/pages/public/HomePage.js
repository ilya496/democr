import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Intro from "../../components/Intro";
import UserList from "../../components/UserList";
import NewsList from "../../components/NewsList";
import $api from "../../http/Axios";
import "../../styles/HomePage.css";

function HomePage() {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  const getAllUsers = () => {
    $api
      .get("/user/all")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, [user?.data]);
  return (
    <>
      <Intro />
      <main>
        <div className="container home-container">
          <section className="main">Main Block</section>
          <aside>
            <p>All Users: {users.length}</p>
            {/* <div className="divider"></div> */}
            <div className="divider aside-divider"></div>
            <UserList users={users} />
            <div className="divider news-divider"></div>
            <NewsList />
          </aside>
        </div>
      </main>
    </>
  );
}

export default HomePage;
