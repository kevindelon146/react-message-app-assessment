import { KeyboardEvent, useEffect } from "react";
import useMessageService from "../services/message-service";
import { Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/16/solid";
import NoMessageAvailable from "../assets/images/NoMessageFound.png";
const MessagesBox = () => {
  const {
    messages,
    setNewMessage,
    newMessage,
    editingMessage,
    setEditingMessage,
    fetchMessages,
    handleAddMessage,
    handleDeleteMessage,
    handleUpdateMessage,
  } = useMessageService();

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddMessage();
    }
  };

  return (
    <div className="w-full overflow-hidden min-h-screen bg-gray-100 p-4 md:p-8 relative">
      <p className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold py-2.5 md:py-5 relative z-20">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Kevin Delong's Assessment
        </span>
      </p>
      <div className="mt-5 max-w-lg mx-auto bg-white p-4 shadow-lg rounded-lg relative z-20">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
          Message Board
        </h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="New message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="w-full mt-2 bg-blue-500 text-sm md:text-base text-white p-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleAddMessage}
          >
            Add Message
          </button>
        </div>
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-3">
          {messages.length === 0 ? (
            // <p className="text-center text-sm">No messages available.</p>
            <img
              src={NoMessageAvailable}
              alt="NoMessageAvailable"
              className="w-full h-60 object-cover rounded-mddsfg"
            />
          ) : (
            messages.map((message: { id: number; content: string }) => (
              <Transition
                key={message.id}
                show={true}
                enter="transform transition duration-500"
                enterFrom="opacity-0 scale-75"
                enterTo="opacity-100 scale-100"
                leave="transform duration-300 transition ease-in-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-75"
              >
                <div className="flex items-center bg-gray-50 hover:bg-gray-200 p-2 rounded-lg shadow-sm">
                  {editingMessage?.id === message.id ? (
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded"
                      value={editingMessage.content}
                      onChange={(e) =>
                        setEditingMessage({
                          ...editingMessage,
                          content: e.target.value,
                        })
                      }
                    />
                  ) : (
                    <span className="flex-1 break-all">{message.content}</span>
                  )}
                  <div className="ml-2 flex gap-2">
                    {editingMessage?.id === message.id ? (
                      <>
                        <button
                          onClick={handleUpdateMessage}
                          className="text-green-500 hover:text-green-700"
                        >
                          <CheckIcon className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setEditingMessage(null)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <XMarkIcon className="w-5 h-5" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditingMessage(message)}
                          className="px-3 py-1 rounded-md text-sm text-white bg-yellow-500 hover:bg-yellow-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteMessage(message.id)}
                          className="px-3 py-1 rounded-md text-sm text-white bg-red-500 hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </Transition>
            ))
          )}
        </div>
      </div>
      <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute z-0 -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
      <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute z-0 -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
    </div>
  );
};

export default MessagesBox;
