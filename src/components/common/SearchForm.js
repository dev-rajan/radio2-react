import React from "react";

const SearchForm = () => {
  return (
    <form className="site-search" method="get" action="">
      <input
        className="textfield"
        type="text"
        placeholder="Type Keyword"
        id="s"
        name="s"
      />
      <button className="button search-btn" type="submit" name="go">
        <span className="fa fa-search"></span>
      </button>
    </form>
  );
};

export default SearchForm;
