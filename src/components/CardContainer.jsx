import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { Row } from "antd";
import Loader from "./Loader";
const CardContainer = () => {
  const [userData, setUserData] = useState([]);

  const handleDeleteUser = (id) => {
    const tempData = [];
    userData.forEach((user) => {
      if (user.id !== id) {
        tempData.push(user);
      }
    });
    setUserData(tempData);
  };

  const handleSubmitEdit = (editedUser) => {
    const tempData = [];
    userData.forEach((user) => {
      if (user.id === editedUser.id) {
        tempData.push(editedUser);
      } else {
        tempData.push(user);
      }
    });
    setUserData(tempData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await rawData.json();
      data.forEach((user) => {
        user.image = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
      });
      setUserData(data);
    };
    fetchData();
  }, []);

  if (userData.length === 0) {
    return <Loader />;
  }

  return (
    <div className="card-container">
      <Row>
        {userData.map((user) => (
          <ProfileCard
            userDetails={user}
            key={user.id}
            onDelete={handleDeleteUser}
            onEditSubmit={handleSubmitEdit}
          />
        ))}
      </Row>
      <div></div>
    </div>
  );
};

export default CardContainer;
