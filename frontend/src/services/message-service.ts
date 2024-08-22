import { useState } from "react";
import {
  createMessage,
  deleteMessage,
  getMessages,
  updateMessage,
} from "../api/api_endPoints";
import { Message, UseMessageService } from "../types";

const useMessageService = (): UseMessageService => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [editingMessage, setEditingMessage] = useState<Message | null>(null);

  const fetchMessages = async () => {
    try {
      const response = await getMessages();
      setMessages(response.data);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  const handleAddMessage = async () => {
    if (!newMessage.trim()) return;
    try {
      await createMessage({ content: newMessage });
      setNewMessage("");
      fetchMessages();
    } catch (error) {
      console.error("Failed to add message:", error);
    }
  };

  const handleDeleteMessage = async (id: number) => {
    try {
      await deleteMessage(id);
      fetchMessages();
    } catch (error) {
      console.error("Failed to delete message:", error);
    }
  };

  const handleUpdateMessage = async () => {
    if (!editingMessage) return;
    try {
      await updateMessage(editingMessage.id, {
        content: editingMessage.content,
      });
      setEditingMessage(null);
      fetchMessages();
    } catch (error) {
      console.error("Failed to update message:", error);
    }
  };

  return {
    messages,
    setNewMessage,
    newMessage,
    editingMessage,
    setEditingMessage,
    fetchMessages,
    handleAddMessage,
    handleDeleteMessage,
    handleUpdateMessage,
  };
};

export default useMessageService;
