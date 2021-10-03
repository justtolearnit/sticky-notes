import React from "react";

const SearchBar = ({searchNote}) => {
    

    const searchHandler = (e) => {
        searchNote(e.target.value)
    }

    return (
        <div className="searchContainer">
            <input
                className="searchInput"
                type="text"
                placeholder='type to search...'
                onChange={searchHandler}
            />
        </div>
    );
}
export default SearchBar;