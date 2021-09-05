import React from "react";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";
import AdminNav from "../Components/AdminNav/AdminNav";

import Footer from "../Components/Footer/Footer";

export default function AdminDashboardContainer() {
  return (
    <React.Fragment>
      <div>
        <AdminNav />
        <AdminDashboard />
        <Footer />
      </div>
    </React.Fragment>
  );
}
