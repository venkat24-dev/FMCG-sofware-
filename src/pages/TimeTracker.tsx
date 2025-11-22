import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Plus, Calendar } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export default function TimeTracker() {
  const [isTracking, setIsTracking] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [selectedTask, setSelectedTask] = useState('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const timeEntries = [
    { task: 'Design Dashboard', project: 'ERP System', duration: '03:45:30', date: '2024-02-20', status: 'Completed' },
    { task: 'Fix Bug #123', project: 'Frontend', duration: '01:20:15', date: '2024-02-20', status: 'Completed' },
    { task: 'Code Review', project: 'Backend', duration: '00:45:00', date: '2024-02-19', status: 'Completed' },
    { task: 'Meeting with Client', project: 'General', duration: '01:00:00', date: '2024-02-19', status: 'Billable' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        
        <div>
          <div className="mb-6">
            <div className="w-7 h-10">
            </div>
          </div>
          <div className="text-sm text-[#6B7280] mb-1">Home {'>'} Productivity {'>'} Time Tracker</div>
          <h1 className="text-[#1A1A1A]">Time Tracker</h1>
        </div>
      </div>

      {/* Timer Card */}
      <div className="bg-white rounded-lg border border-[#E6E8EC] p-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl text-[#1A1A1A] mb-6 font-mono">{formatTime(seconds)}</div>
          
          <div className="mb-6">
            <input
              type="text"
              placeholder="What are you working on?"
              value={selectedTask}
              onChange={(e) => setSelectedTask(e.target.value)}
              className="w-full h-[48px] px-4 border border-[#E6E8EC] rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-[#2962FF]"
            />
          </div>

          <div className="flex items-center justify-center gap-4">
            {!isTracking ? (
              <button
                onClick={() => setIsTracking(true)}
                className="h-[56px] px-8 bg-[#10B981] hover:bg-[#059669] text-white rounded-lg flex items-center gap-3 transition-colors"
              >
                <Play className="w-6 h-6" />
                <span className="text-lg">Start Timer</span>
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsTracking(false)}
                  className="h-[56px] px-8 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-lg flex items-center gap-3 transition-colors"
                >
                  <Pause className="w-6 h-6" />
                  <span className="text-lg">Pause</span>
                </button>
                <button
                  onClick={() => {
                    setIsTracking(false);
                    setSeconds(0);
                    setSelectedTask('');
                  }}
                  className="h-[56px] px-8 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-lg flex items-center gap-3 transition-colors"
                >
                  <Square className="w-6 h-6" />
                  <span className="text-lg">Stop & Save</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Time Entries */}
      <div className="bg-white rounded-lg border border-[#E6E8EC] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#1A1A1A]">Recent Time Entries</h3>
          <h3 className="text-[#1A1A1A]">Time & Date</h3>
          <h3 className="text-[#1A1A1A]">Status</h3>
          <button className="h-[40px] px-4 bg-white border border-[#E6E8EC] rounded-lg hover:bg-[#F8F9FC] transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">This Week</span>
          </button>
        </div>

        <div className="space-y-3">
          {timeEntries.map((entry, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#F8F9FC] rounded-lg hover:bg-[#E6E8EC] transition-colors">
              <div className="flex-1">
                <div className="text-sm text-[#1A1A1A] mb-1">{entry.task}</div>
                <div className="text-xs text-[#6B7280]">{entry.project}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm text-[#1A1A1A] font-mono">{entry.duration}</div>
                  <div className="text-xs text-[#6B7280]">{new Date(entry.date).toLocaleDateString()}</div>
                </div>
                <Badge variant={entry.status === 'Billable' ? 'success' : 'default'}>
                  {entry.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-6 pt-6 border-t border-[#E6E8EC]">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-sm text-[#6B7280] mb-1">Today</div>
              <div className="text-xl text-[#1A1A1A] font-mono">05:05:45</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-[#6B7280] mb-1">This Week</div>
              <div className="text-xl text-[#1A1A1A] font-mono">28:30:15</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-[#6B7280] mb-1">This Month</div>
              <div className="text-xl text-[#1A1A1A] font-mono">112:45:30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
