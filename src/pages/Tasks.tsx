import React, { useState } from 'react';
import { Plus, Search, LayoutGrid, List } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import AvatarGroup from '../components/ui/AvatarGroup';

export default function Tasks() {
  const [view, setView] = useState<"kanban" | "list">("kanban");

  const tasks = {
    "To Do": [
      {
        id: 1,
        title: "Design new dashboard",
        project: "ERP System",
        priority: "High",
        assignees: [{ name: "John Doe" }, { name: "Jane Smith" }],
        dueDate: "2024-02-25",
      },
      {
        id: 2,
        title: "Update inventory API",
        project: "Backend",
        priority: "Medium",
        assignees: [{ name: "Mike Johnson" }],
        dueDate: "2024-02-26",
      },
    ],
    "In Progress": [
      {
        id: 3,
        title: "Fix login bug",
        project: "Frontend",
        priority: "High",
        assignees: [{ name: "Sarah Williams" }],
        dueDate: "2024-02-22",
      },
      {
        id: 4,
        title: "Write documentation",
        project: "Documentation",
        priority: "Low",
        assignees: [{ name: "Tom Brown" }, { name: "Emma Davis" }],
        dueDate: "2024-02-28",
      },
    ],
    Review: [
      {
        id: 5,
        title: "Code review PR #123",
        project: "Backend",
        priority: "Medium",
        assignees: [{ name: "Alex Wilson" }],
        dueDate: "2024-02-23",
      },
    ],
    Done: [
      {
        id: 6,
        title: "Setup CI/CD pipeline",
        project: "DevOps",
        priority: "High",
        assignees: [{ name: "Chris Lee" }],
        dueDate: "2024-02-20",
      },
      {
        id: 7,
        title: "Database migration",
        project: "Backend",
        priority: "High",
        assignees: [{ name: "Pat Taylor" }],
        dueDate: "2024-02-19",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="w-7 h-10">
              <p className="text-[16px]"></p>
              <p className="text-[16px]"></p>
            </div>
      <div className="flex items-center justify-between">
        <div>
          
          <div className="text-sm text-[#6B7280] mb-1">
            Home {">"} Productivity {">"} Tasks
          </div>
          <h1 className="text-[#1A1A1A]">Tasks</h1>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5 bg-white border border-[#E6E8EC] rounded-lg p-1">
            <button
              onClick={() => setView("kanban")}
              className={`h-[32px] px-3 rounded flex items-center gap-2 text-sm transition-colors ${
                view === "kanban"
                  ? "bg-[#2962FF] text-white"
                  : "text-[#6B7280] hover:text-[#1A1A1A]"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Kanban</span>
            </button>
            <button
              onClick={() => setView("list")}
              className={`h-[32px] px-3 rounded flex items-center gap-2 text-sm transition-colors ${
                view === "list"
                  ? "bg-[#2962FF] text-white"
                  : "text-[#6B7280] hover:text-[#1A1A1A]"
              }`}
            >
              <List className="w-4 h-4" />
              <span>List</span>
            </button>
          </div>
          <button className="h-[40px] px-4 bg-[#2962FF] hover:bg-[#1E4ED8] text-white rounded-lg flex items-center gap-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add Task</span>
          </button>
        </div>
      </div>
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
        />
      </div>

      {view === "kanban" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(tasks).map(([status, statusTasks]) => (
            <div key={status} className="bg-[#F8F9FC] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-[#1A1A1A]">{status}</h3>
                <span className="text-xs text-[#6B7280] bg-white px-2 py-1 rounded">
                  {statusTasks.length}
                </span>
              </div>
              <div className="space-y-3">
                {statusTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white rounded-lg p-4 border border-[#E6E8EC] hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="text-sm text-[#1A1A1A] mb-2">
                      {task.title}
                    </div>
                    <div className="text-xs text-[#6B7280] mb-3">
                      {task.project}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          task.priority === "High"
                            ? "danger"
                            : task.priority === "Medium"
                            ? "warning"
                            : "default"
                        }
                        size="sm"
                      >
                        {task.priority}
                      </Badge>
                      <AvatarGroup avatars={task.assignees} max={2} size="sm" />
                    </div>
                    <div className="text-xs text-[#6B7280] mt-3">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "list" && (
        <div className="bg-white rounded-lg border border-[#E6E8EC] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F8F9FC] border-b border-[#E6E8EC]">
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">
                  Task
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">
                  Project
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">
                  Priority
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">
                  Assignees
                </th>
                <th className="px-4 py-3 text-left text-xs text-[#6B7280] uppercase">
                  Due Date
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(tasks).flatMap(([status, statusTasks]) =>
                statusTasks.map((task) => (
                  <tr
                    key={task.id}
                    className="border-b border-[#E6E8EC] hover:bg-[#F8F9FC] transition-colors"
                  >
                    {/* Task Title */}
                    <td className="px-6 py-4 text-sm font-medium text-[#1A1A1A]">
                      {task.title}
                    </td>

                    {/* Project Name */}
                    <td className="px-6 py-4 text-sm text-[#6B7280]">
                      {task.project}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <Badge variant="info">{status}</Badge>
                    </td>

                    {/* Priority Badge */}
                    <td className="px-6 py-4">
                      <Badge
                        variant={
                          task.priority === "High"
                            ? "danger"
                            : task.priority === "Medium"
                            ? "warning"
                            : "default"
                        }
                      >
                        {task.priority}
                      </Badge>
                    </td>

                    {/* Assignees */}
                    <td className="px-6 py-4">
                      <AvatarGroup avatars={task.assignees} max={3} size="sm" />
                    </td>

                    {/* Due Date */}
                    <td className="px-6 py-4 text-sm text-[#6B7280]">
                      {new Date(task.dueDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
