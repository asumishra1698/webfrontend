import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaChartPie,
  FaUser,
  FaBoxOpen,
  FaUsers,
  FaSignOutAlt,
  FaEye,
} from "react-icons/fa";

// Sidebar component
const Sidebar: React.FC<{
  collapsed: boolean;
  onCollapse: () => void;
  onLogout: () => void;
}> = ({ collapsed, onCollapse, onLogout }) => (
  <aside
    className={`bg-blue-800 text-white h-screen transition-all duration-300 ${
      collapsed ? "w-16" : "w-64"
    } flex flex-col fixed left-0 top-0 z-20`}
  >
    <div className="flex items-center justify-between px-4 py-4 border-b border-blue-700">
      <span className={`font-bold text-lg ${collapsed ? "hidden" : "block"}`}>
        Admin
      </span>
      <button
        className="focus:outline-none"
        onClick={onCollapse}
        aria-label="Toggle Sidebar"
      >
        <FaBars size={20} />
      </button>
    </div>
    <nav className="flex-1 mt-4">
      <ul className="space-y-2">
        <li>
          <a
            href="#dashboard"
            className="flex items-center px-4 py-2 hover:bg-blue-700 rounded transition"
          >
            <FaChartPie className="mr-3" size={18} />
            {!collapsed && "Dashboard"}
          </a>
        </li>
        <li>
          <a
            href="#orders"
            className="flex items-center px-4 py-2 hover:bg-blue-700 rounded transition"
          >
            <FaBoxOpen className="mr-3" size={18} />
            {!collapsed && "Orders"}
          </a>
        </li>
        <li>
          <a
            href="#users"
            className="flex items-center px-4 py-2 hover:bg-blue-700 rounded transition"
          >
            <FaUsers className="mr-3" size={18} />
            {!collapsed && "Users"}
          </a>
        </li>
        <li>
          <a
            href="#profile"
            className="flex items-center px-4 py-2 hover:bg-blue-700 rounded transition"
          >
            <FaUser className="mr-3" size={18} />
            {!collapsed && "Profile"}
          </a>
        </li>
      </ul>
    </nav>
    <div className="px-4 py-4 border-t border-blue-700">
      <button
        className="flex items-center w-full text-left hover:bg-blue-700 px-2 py-2 rounded transition"
        onClick={onLogout}
      >
        <FaSignOutAlt className="mr-3" size={18} />
        {!collapsed && "Logout"}
      </button>
    </div>
  </aside>
);

const InfoCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, icon, color }) => (
  <div className="flex items-center p-5 rounded-xl shadow bg-white">
    <div
      className="rounded-full p-3 text-white mr-4 flex items-center justify-center"
      style={{ background: color }}
    >
      {icon}
    </div>
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-gray-500">{title}</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const analytics = [
    {
      title: "Total Orders",
      value: 1240,
      icon: <FaBoxOpen size={24} />,
      color: "#2563eb",
    },
    {
      title: "Active Users",
      value: 312,
      icon: <FaUsers size={24} />,
      color: "#059669",
    },
    {
      title: "Live Visitors",
      value: 27,
      icon: <FaEye size={24} />,
      color: "#f59e42",
    },
    {
      title: "Admins",
      value: 5,
      icon: <FaUser size={24} />,
      color: "#a21caf",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar
        collapsed={sidebarCollapsed}
        onCollapse={() => setSidebarCollapsed((c) => !c)}
        onLogout={handleLogout}
      />
      <div
        className={`flex-1 ml-0 transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-blue-800">Dashboard</h1>
          <span className="text-gray-500 text-sm">
            {new Date().toLocaleDateString()}
          </span>
        </header>
        <main className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analytics.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                value={item.value}
                icon={item.icon}
                color={item.color}
              />
            ))}
          </div>
          <div className="bg-white rounded-xl shadow p-8 mt-8">
            <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
            <p className="text-gray-600 mb-4">
              Here you can add charts, graphs, and more detailed analytics.
            </p>            
            <div className="h-40 flex items-center justify-center text-gray-400">
              [Charts/Graphs Placeholder]
            </div>
          </div>
        </main>
        <footer className="bg-blue-700 text-white text-center py-2 mt-10">
          &copy; {new Date().getFullYear()} Your Company
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;