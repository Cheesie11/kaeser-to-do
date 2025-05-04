"use client";
import React, { useState, useEffect } from 'react';
import ToDoItem from './components/ToDoItem';

type ToDoItemType = {
  id: string;
  text: string;
};

const ToDoPage = () => {
  const [toDoList, setToDoList] = useState<ToDoItemType[]>(() => {
    try {
      const saved = localStorage.getItem('toDoList');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [inputValue, setInputValue] = useState('');

  // Save to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
  }, [toDoList]);

  const handleAddToDo = () => {
    if (inputValue.trim()) {
      const newItem = { id: crypto.randomUUID(), text: inputValue.trim() };
      setToDoList([...toDoList, newItem]);
      setInputValue('');
    }
  };

  const handleRemoveToDo = (id: string) => {
    setToDoList(toDoList.filter(item => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-base-100 flex flex-col items-center pt-24 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-5xl font-bold text-center mb-10">📝 Your To-Do List</h1>

        <div className="flex items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input input-lg input-bordered w-full text-lg focus:outline-none focus:ring-0"
          />
          <button
            className="btn btn-primary btn-lg"
            onClick={handleAddToDo}
          >
            +
          </button>
        </div>

        <div className="space-y-4">
          {toDoList.map((item) => (
            <ToDoItem
              key={item.id}
              id={item.id}
              text={item.text}
              onRemove={handleRemoveToDo}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ToDoPage;
