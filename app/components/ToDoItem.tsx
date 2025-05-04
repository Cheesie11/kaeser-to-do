import React, { useState } from 'react';

interface ToDoItemProps {
  id: string;
  text: string;
  onRemove: (id: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ id, text, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleDelayedRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(id);
    }, 2000);
  };

  return (
    <div className={`flex items-center p-4 bg-base-200 rounded-xl shadow-md transition-opacity duration-500 ${isRemoving ? 'opacity-50' : ''}`}>
      <span className="flex-grow text-lg">{text}</span>
      <input
        type="checkbox"
        className="checkbox checkbox-lg checkbox-primary ml-4"
        onChange={handleDelayedRemove}
        disabled={isRemoving}
      />
    </div>
  );
};

export default ToDoItem;
