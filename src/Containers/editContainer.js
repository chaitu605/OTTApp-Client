import React from "react";
import AdminNav from "../Components/AdminNav/AdminNav";
import EditVideo from "../Components/EditVideo/EditVideo";

import Footer from "../Components/Footer/Footer";

export default function EditVideoContainer() {
  return (
    <React.Fragment>
      <div>
        <AdminNav />
        <EditVideo />
        <Footer />
      </div>
    </React.Fragment>
  );
}
