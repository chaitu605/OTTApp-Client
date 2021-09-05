import React from "react";
import AdminNav from "../Components/AdminNav/AdminNav";

import Footer from "../Components/Footer/Footer";
import SearchResults from "../Components/SearchResults/SearchResults";

export default function SearchResultsContainer() {
  return (
    <React.Fragment>
      <div>
        <AdminNav />
        <SearchResults />
        <Footer />
      </div>
    </React.Fragment>
  );
}
