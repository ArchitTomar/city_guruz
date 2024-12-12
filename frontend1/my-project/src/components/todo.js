import React, { useState } from "react";
import Calendar from "react-calendar"; // Import Calendar
import 'react-calendar/dist/Calendar.css'; // Import styles for the calendar
import "./td.css";

const Todo = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Social Media",
      content: "Plan social content\nBuild content calendar\nPlan promotion and distribution",
      color: "#fef3bd",
    },
    {
      id: 2,
      title: "Content Strategy",
      content: "Would need time to get insights\nFocus on SEO team\nBrainstorm on tooling",
      color: "#d3f3f9",
    },
    {
      id: 3,
      title: "Email A/B Tests",
      content: "Subject lines\nSender\nCTA\nSending times",
      color: "#f9d6d6",
    },
    {
      id: 4,
      title: "Banner Ads",
      content: "Sizing matters\nChoose distinctive imagery\nLanding page matches display ad",
      color: "#ffeadb",
    },
  ]);

  const [lists, setLists] = useState([
    { id: 1, name: "Personal", color: "#f4c9c9" },
    { id: 2, name: "Work", color: "#c9f4d9" },
  ]);

  const [tags, setTags] = useState(["Tag 1", "Tag 2"]);

  const [currentSection, setCurrentSection] = useState("StickyWall"); // Default view
  const [date, setDate] = useState(new Date()); // State for selected date

  const handleEdit = (id, field, value) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
  };

  const addNote = () => {
    setNotes([
      ...notes,
      {
        id: Date.now(),
        title: "New Note",
        content: "Click to edit...",
        color: "#f0f0f0",
      },
    ]);
  };

  const addNewList = () => {
    const newListName = prompt("Enter new list name:");
    if (newListName) {
      setLists([
        ...lists,
        { id: Date.now(), name: newListName, color: "#f4e5c9" },
      ]);
    }
  };

  const addNewTag = () => {
    const newTagName = prompt("Enter new tag name:");
    if (newTagName) {
      setTags([...tags, newTagName]);
    }
  };

  const renderContent = () => {
    switch (currentSection) {
      case "Upcoming":
        return <h2>Upcoming Tasks</h2>;
      case "Today":
        return <h2>Today's Tasks</h2>;
      case "Calendar":
        return (
          <div className="todocalendar">
            <h2>Calendar</h2>
            <Calendar onChange={setDate} value={date} />
            <p>Selected Date: {date.toDateString()}</p>
          </div>
        );
      case "StickyWall":
        return (
          <div>
            <h1>Sticky Wall</h1>
            <div className="todosticky-wall">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="todosticky-note"
                  style={{ backgroundColor: note.color }}
                >
                  <input
                    className="todonote-title"
                    value={note.title}
                    onChange={(e) => handleEdit(note.id, "title", e.target.value)}
                  />
                  <textarea
                    className="todonote-content"
                    value={note.content}
                    onChange={(e) => handleEdit(note.id, "content", e.target.value)}
                  />
                </div>
              ))}
              <div className="todoadd-note" onClick={addNote}>
                +
              </div>
            </div>
          </div>
        );
      default:
        return <h2>Section Not Found</h2>;
    }
  };

  return (
    <div className="todosapp">
      {/* Sidebar */}
      <div className="todosidebar">
        <h3>Menu</h3>
        <div className="todosearch">
          <input type="text" placeholder="Search" />
        </div>
        <div className="todomenu-section">
          <h4>Tasks</h4>
          <ul>
            <li onClick={() => setCurrentSection("Upcoming")}>
              Upcoming <span className="todobadge">12</span>
            </li>
            <li onClick={() => setCurrentSection("Today")}>
              Today <span className="todobadge">5</span>
            </li>
            <li onClick={() => setCurrentSection("Calendar")}>Calendar</li>
            <li onClick={() => setCurrentSection("StickyWall")}>Sticky Wall</li>
          </ul>
        </div>
        <div className="todomenu-section">
          <h4>Lists</h4>
          <ul>
            {lists.map((list) => (
              <li key={list.id}>
                <span
                  className="todolist-color"
                  style={{ backgroundColor: list.color }}
                ></span>{" "}
                {list.name} <span className="todobadge">3</span>
              </li>
            ))}
            <li className="todoadd-list" onClick={addNewList}>
              + Add New List
            </li>
          </ul>
        </div>
        <div className="todomenu-section">
          <h4>Tags</h4>
          <div className="todotags">
            {tags.map((tag, index) => (
              <span key={index} className="todotag">
                {tag}
              </span>
            ))}
            <button className="todoadd-tag" onClick={addNewTag}>
              + Add Tag
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="todocontent">{renderContent()}</div>
    </div>
  );
};

export default Todo;
