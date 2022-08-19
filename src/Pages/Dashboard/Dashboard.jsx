import React from "react";
import Main from "../../components/Main/Main";

import Navigation from "../../components/Navigation/Navigation";
import Userinfo from "../../components/UserInfo/Userinfo";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Userinfo />
      <Main />
    </div>
  );
};

export default Dashboard;
