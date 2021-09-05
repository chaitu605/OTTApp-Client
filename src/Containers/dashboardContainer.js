import React from "react";
import Dashboard from "../Components/Dashboard/Dashboard";
import AdminNav from "../Components/AdminNav/AdminNav";
import Footer from "../Components/Footer/Footer";

export default function DashboardContainer() {
  return (
    <React.Fragment>
      <div>
        <AdminNav />
        <Dashboard />
        <Footer />
      </div>
    </React.Fragment>
  );
}
