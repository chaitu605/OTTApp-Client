import React from "react";
import Footer from "../Components/Footer/Footer";
import PublicNav from "../Components/PublicNav/PublicNav";
import Register from "../Components/Register";

export default function RegisterContainer() {
  return (
    <React.Fragment>
      <div>
        <PublicNav />
        <Register />
        <Footer />
      </div>
    </React.Fragment>
  );
}
