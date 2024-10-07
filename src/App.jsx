import TaskList from "./components/TaskList";
import FormTask from "./components/FormTask";

export default function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <FormTask />
        <TaskList />
      </div>
    </main>
  );
}
