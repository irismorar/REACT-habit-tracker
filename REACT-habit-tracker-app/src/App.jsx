import { useState } from "react";
import "./App.css";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [habits, setHabits] = useState([]);
  console.log(habits);

  return (
    <div className="app_container">
      <h1>Habit Tracker</h1>
      <section className="habit_input_container">
        <input
          type="text"
          placeholder="Type your habit..."
          value={userInput}
          onChange={(event) => {
            if (!event.target.value.trim()) {
              alert("The habit must be an action!");
              return;
            }

            setUserInput(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const newState = [
              ...habits,
              { id: Date.now(), name: userInput, completed: false },
            ];
            setHabits(newState);
            setUserInput("");
          }}
        >
          Add habit
        </button>
      </section>
      <ul>
        {habits.map((habit) => {
          return (
            <li key={habit.id}>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => {
                  const updatedHabits = habits.map((item) =>
                    item.id === habit.id
                      ? { ...item, completed: !item.completed }
                      : item
                  );
                  setHabits(updatedHabits);
                }}
              />

              <label
                style={{
                  textDecoration: habit.completed ? "line-through" : "none",
                }}
              >
                {habit.name}
              </label>

              <button
                className="delete_button"
                onClick={() => {
                  const afterDeleteHabits = habits.filter(
                    (item) => item.id !== habit.id
                  );
                  setHabits(afterDeleteHabits);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
