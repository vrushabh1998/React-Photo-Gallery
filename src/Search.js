import React, { useRef } from "react";

function Search({ setSearchKey, prevSearch }) {
  const input = useRef();

  const inputSearch = (e) =>
    e.key === "Enter" && input.current.value
      ? setSearchKey(input.current.value)
      : setSearchKey(prevSearch);

  return (
    <header>
      <div className="search">
        <input
          ref={input}
          type="text"
          placeholder="Search Images"
          onKeyDown={inputSearch}
        />
        <button
          className="fa fa-search"
          onClick={() =>
            input.current.value
              ? setSearchKey(input.current.value)
              : setSearchKey(prevSearch)
          }
        />
      </div>
    </header>
  );
}

export default Search;
