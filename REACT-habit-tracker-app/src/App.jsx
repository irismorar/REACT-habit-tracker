import "./App.css";

function HabitTextInput() {
  return <input type="text" placeholder="Type your habit..." />;
}

function ButtonAddHabit() {
  return <button>Add habit</button>;
}

export default function App() {
  return (
    <div className="app_container">
      <h1>Habit Tracker</h1>
      <section>
        <HabitTextInput />
        <ButtonAddHabit />
      </section>
    </div>
  );
}
