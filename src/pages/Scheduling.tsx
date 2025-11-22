import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Plus,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  MoreHorizontal,
  Video,
  Phone,
} from "lucide-react";
import { Badge } from "../components/ui/Badge";

export default function Scheduling() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week" | "day">("week");

  const events = [
    {
      id: 1,
      title: "Production Planning Meeting",
      time: "09:00 - 10:00",
      date: "2025-11-24",
      type: "meeting",
      location: "Conference Room A",
      attendees: ["John Doe", "Sarah Smith", "Mike Johnson"],
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: 2,
      title: "Inventory Audit",
      time: "11:00 - 12:30",
      date: "2025-11-24",
      type: "task",
      location: "Warehouse",
      attendees: ["Emily Davis", "Tom Wilson"],
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
    {
      id: 3,
      title: "Client Call - ABC Corp",
      time: "14:00 - 15:00",
      date: "2025-11-24",
      type: "call",
      location: "Virtual",
      attendees: ["Sarah Smith", "John Doe"],
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      id: 4,
      title: "Team Standup",
      time: "10:00 - 10:30",
      date: "2025-11-25",
      type: "meeting",
      location: "Main Office",
      attendees: ["All Team"],
      color: "bg-blue-100 text-blue-700 border-blue-200",
    },
    {
      id: 5,
      title: "Quarterly Review",
      time: "15:00 - 17:00",
      date: "2025-11-25",
      type: "meeting",
      location: "Board Room",
      attendees: ["Management Team"],
      color: "bg-orange-100 text-orange-700 border-orange-200",
    },
    {
      id: 6,
      title: "Warehouse Inspection",
      time: "09:00 - 11:00",
      date: "2025-11-26",
      type: "task",
      location: "Warehouse B",
      attendees: ["Mike Johnson", "Emily Davis"],
      color: "bg-purple-100 text-purple-700 border-purple-200",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Production Planning Meeting",
      time: "09:00 AM",
      date: "Today",
      type: "meeting",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Inventory Audit",
      time: "11:00 AM",
      date: "Today",
      type: "task",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Client Call - ABC Corp",
      time: "02:00 PM",
      date: "Today",
      type: "call",
      status: "upcoming",
    },
    {
      id: 4,
      title: "Team Standup",
      time: "10:00 AM",
      date: "Tomorrow",
      type: "meeting",
      status: "upcoming",
    },
    {
      id: 5,
      title: "Quarterly Review",
      time: "03:00 PM",
      date: "Tomorrow",
      type: "meeting",
      status: "upcoming",
    },
  ];

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

  const getEventIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return Video;
      case "call":
        return Phone;
      case "task":
        return Clock;
      default:
        return Calendar;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="mb-6">
            <div className="w-7 h-10">
              <p className="text-[16px]"></p>
              <p className="text-[16px]"></p>
            </div>
          </div>
          <h1>Scheduling</h1>
          <p className="text-slate-500 mt-1">
            Manage meetings, events, and appointments
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus className="w-4 h-4" />
          New Event
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Today's Events</p>
              <p className="text-2xl mt-1">8</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">This Week</p>
              <p className="text-2xl mt-1">24</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Meetings</p>
              <p className="text-2xl mt-1">12</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Video className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Attendees</p>
              <p className="text-2xl mt-1">48</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            {/* Calendar Controls */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span>November 2025</span>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <button className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Today
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <button
                    onClick={() => setView("month")}
                    className={`px-3 py-1.5 text-sm rounded transition-colors ${
                      view === "month"
                        ? "bg-white shadow-sm"
                        : "hover:bg-slate-200"
                    }`}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => setView("week")}
                    className={`px-3 py-1.5 text-sm rounded transition-colors ${
                      view === "week"
                        ? "bg-white shadow-sm"
                        : "hover:bg-slate-200"
                    }`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => setView("day")}
                    className={`px-3 py-1.5 text-sm rounded transition-colors ${
                      view === "day"
                        ? "bg-white shadow-sm"
                        : "hover:bg-slate-200"
                    }`}
                  >
                    Day
                  </button>
                </div>
              </div>
            </div>

            {/* Week View */}
            {view === "week" && (
              <div className="p-4">
                <div className="grid grid-cols-8 gap-2 mb-2">
                  <div className="text-xs text-slate-500"></div>
                  {weekDays.map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-xs text-slate-500">{day}</div>
                      <div
                        className={`text-sm mt-1 ${
                          index === 0 ? "text-blue-600" : ""
                        }`}
                      >
                        {21 + index}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  {timeSlots.map((time) => (
                    <div
                      key={time}
                      className="grid grid-cols-8 border-b border-slate-200 last:border-b-0"
                    >
                      <div className="p-2 text-xs text-slate-500 bg-slate-50 border-r border-slate-200">
                        {time}
                      </div>
                      {weekDays.map((day, dayIndex) => {
                        const event = events.find(
                          (e) =>
                            e.date === `2025-11-${21 + dayIndex}` &&
                            e.time.startsWith(time.slice(0, 2))
                        );
                        return (
                          <div
                            key={`${day}-${time}`}
                            className="p-1 border-r border-slate-200 last:border-r-0 min-h-[60px] hover:bg-slate-50 transition-colors"
                          >
                            {event && (
                              <div
                                className={`${event.color} border rounded p-2 text-xs cursor-pointer hover:shadow-sm transition-shadow`}
                              >
                                <div className="truncate">{event.title}</div>
                                <div className="text-xs opacity-75 mt-1">
                                  {event.time}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Month View */}
            {view === "month" && (
              <div className="p-4">
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center text-xs text-slate-500 py-2"
                      >
                        {day}
                      </div>
                    )
                  )}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const dayNum = i - 3;
                    const isCurrentMonth = dayNum >= 1 && dayNum <= 30;
                    const hasEvent =
                      isCurrentMonth && [24, 25, 26].includes(dayNum);
                    return (
                      <div
                        key={i}
                        className={`aspect-square border border-slate-200 rounded-lg p-2 ${
                          isCurrentMonth
                            ? "bg-white hover:bg-slate-50 cursor-pointer"
                            : "bg-slate-50"
                        } transition-colors`}
                      >
                        <div
                          className={`text-sm ${
                            isCurrentMonth ? "" : "text-slate-400"
                          }`}
                        >
                          {isCurrentMonth ? dayNum : ""}
                        </div>
                        {hasEvent && (
                          <div className="mt-1">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Day View */}
            {view === "day" && (
              <div className="p-4">
                <div className="text-center mb-4">
                  <div className="text-sm text-slate-500">Friday</div>
                  <div className="text-2xl">November 21</div>
                </div>
                <div className="space-y-2">
                  {events
                    .filter((e) => e.date === "2025-11-24")
                    .map((event) => (
                      <div
                        key={event.id}
                        className={`${event.color} border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">{event.time}</span>
                            </div>
                            <h3 className="mt-2">{event.title}</h3>
                            <div className="flex items-center gap-4 mt-2 text-sm opacity-75">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {event.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                {event.attendees.length} attendees
                              </div>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3>Upcoming Events</h3>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-[400px] h-[40px] bg-[#F8F9FC] border border-[#E6E8EC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2962FF] focus:border-transparent font-[Imprima] text-[16px] not-italic text-center font-bold font-normal"
              />
            </div>

            <div className="flex flex-col justify-between items-stretch w-full ">
              <div className="space-y-2">
                {upcomingEvents.map((event) => {
                  const Icon = getEventIcon(event.type);
                  return (
                    <div
                      key={event.id}
                      className="py-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            event.type === "meeting"
                              ? "bg-blue-100 text-blue-600"
                              : event.type === "call"
                              ? "bg-green-100 text-green-600"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          <div className="flex justify-center">
                            <Icon className="w-1 h-1" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate">{event.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-slate-500">
                              {event.time}
                            </span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs text-slate-500">
                              {event.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="w-7 h-8">
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 text-white">
            <h3 className="text-white">Quick Schedule</h3>
            <p className="text-blue-100 text-sm mt-1">
              Create events in seconds
            </p>
            <div className="space-y-2 mt-4">
              <button className="w-full py-[60px] bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2">
                <Video className="w-5 h-5" />
                Schedule Meeting
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-2 rounded-lg transition-colors text-sm flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Call
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-5 py-2 rounded-lg transition-colors text-sm flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
