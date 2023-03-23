import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <form>
        <fieldset>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch({ ...search, name: e.target.value })}
            style={{ border: "1px solid" }}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Search;
