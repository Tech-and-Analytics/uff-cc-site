import { useState } from "react";

import { ChecklistItem } from "./ChecklistItem";
import { ChecklistProgress } from "./ChecklistProgress";

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

interface ChecklistProps {
  title: string;
  items: Item[];
}

export function Checklist({
  title,
  items,
}: ChecklistProps) {
  const [tasks, setTasks] =
    useState<Item[]>(items);

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const completedCount =
    tasks.filter(
      (task) => task.completed
    ).length;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">
        {title}
      </h2>

      <ChecklistProgress
        completed={completedCount}
        total={tasks.length}
      />

      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <ChecklistItem
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() =>
              toggleTask(task.id)
            }
          />
        ))}
      </div>
    </div>
  );
}