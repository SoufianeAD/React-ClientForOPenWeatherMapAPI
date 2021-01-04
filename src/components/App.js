import React from "react";
import SearchBar from "./SearchBar";
import Cities from "./Cities";

const App = () => {
    return (
        <div className="container p-5">
            <SearchBar />
            <Cities />
        </div>
    );
}
export default App;