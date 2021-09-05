import React from "react";
import Footer from "../Components/Footer/Footer";
import Login from "../Components/Login";
import PublicNav from "../Components/PublicNav/PublicNav";

export default function LoginContainer() {
  return (
    <React.Fragment>
      <div>
        <PublicNav />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}
