import { ReactNode } from "react";

export interface Message {
  id: number;
  content: string;
}

export interface UseMessageService {
  messages: Message[];
  setNewMessage: (newMessage: string) => void;
  newMessage: string;
  setEditingMessage: (editingMessage: Message | null) => void;
  editingMessage: Message | null;
  fetchMessages: () => Promise<void>;
  handleAddMessage: () => Promise<void>;
  handleDeleteMessage: (id: number) => Promise<void>;
  handleUpdateMessage: () => Promise<void>;
}

export interface ScrollToTopProps {
  children: ReactNode;
}
