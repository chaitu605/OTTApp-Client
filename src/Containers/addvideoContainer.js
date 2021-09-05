import React from "react";
import AdminNav from "../Components/AdminNav/AdminNav";
import AddVideo from "../Components/AddVideo/AddVideo";
import Footer from "../Components/Footer/Footer";

export default function AddVideoContainer() {
  return (
    <React.Fragment>
      <div>
        <AdminNav />
        <AddVideo />
        <Footer />
      </div>
    </React.Fragment>
  );
}
