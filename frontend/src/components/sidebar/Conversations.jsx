import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = ({ filteredConversations }) => {
  const { loading, conversations } = useGetConversations();

  const conversationsToShow = filteredConversations || conversations; // Show filtered or all conversations

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversationsToShow.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversationsToShow.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
