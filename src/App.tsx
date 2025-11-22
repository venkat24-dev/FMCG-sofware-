import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import TimeTracker from "./pages/TimeTracker";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import Warehouse from "./pages/Warehouse";
import Purchasing from "./pages/Purchasing";
import Pricing from "./pages/Pricing";
import Accounting from "./pages/Accounting";
import CRM from "./pages/CRM";
import HRM from "./pages/HRM";
import Reports from "./pages/Reports";
import Scheduling from "./pages/Scheduling";
import Docs from "./pages/Docs";

export default function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route
            path="/time-tracker"
            element={<TimeTracker />}
          />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/purchasing" element={<Purchasing />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/hrm" element={<HRM />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/docs" element={<Docs />} />
          {/* Catch-all route - redirects any unmatched paths to dashboard */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}