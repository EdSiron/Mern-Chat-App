import React, { useState, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = ({ setFilteredConversations }) => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();

  useEffect(() => {
    if (!search) {
      setFilteredConversations(null);
      return;
    }

    const filtered = conversations.filter((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredConversations(filtered);
  }, [search, conversations, setFilteredConversations]);

  const handleReset = () => {
    setSearch("");
    setFilteredConversations(null);
  };

  return (
    <div className="flex items-center w-full relative">
      <div
        className={`transition-[width] duration-200 ease-in-out ${
          search ? "w-10" : "w-0"
        }`}
      >
        <button
          type="button"
          className={`w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-full transition-transform duration-200 ${
            search ? "scale-100" : "scale-0"
          }`}
          onClick={handleReset}
        >
          <IoArrowBackSharp className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`flex-1 min-w-0 transition-[margin] duration-200 ease-in-out ${
          search ? "ml-2" : "ml-0"
        }`}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
