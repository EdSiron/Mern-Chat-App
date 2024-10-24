import React, { useState } from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  const [filteredConversations, setFilteredConversations] = useState(null);

  return (
    <div className="w-80 border-r border-slate-500 p-4 flex flex-col">
      <div className="w-full">
        <SearchInput setFilteredConversations={setFilteredConversations} />
      </div>
      <div className="divider px-3"></div>
      <Conversations filteredConversations={filteredConversations} />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
