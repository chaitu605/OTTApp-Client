import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Banner from "./Banner";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import Row6 from "./Row6";

export default function Dashboard() {
  const user = useSelector((state) => state.user);
  const role = user.user_info.roles;
  const history = useHistory();

  if (role === "admin") {
    history.push("/admin-dashboard");
  }

  return (
    <React.Fragment>
      <Banner />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
    </React.Fragment>
  );
}
