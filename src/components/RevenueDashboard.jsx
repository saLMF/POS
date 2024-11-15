import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Bell,
  Filter,
  Home,
  DollarSign,
  Users,
  ShoppingBag,
  Settings,
  LogOut,
} from "lucide-react";

const data = [
  {month: "Jan", revenue: 30000},
  {month: "Feb", revenue: 35000},
  {month: "Mar", revenue: 45000},
  {month: "Apr", revenue: 40000},
  {month: "May", revenue: 60000},
  {month: "Jun", revenue: 120000},
  {month: "Jul", revenue: 90000},
  {month: "Aug", revenue: 55000},
  {month: "Sep", revenue: 50000},
  {month: "Oct", revenue: 25000},
  {month: "Nov", revenue: 45000},
  {month: "Dec", revenue: 55000},
];

const tableData = [
  {
    id: 1,
    date: "Sat, Aug 1 2023",
    customers: 120,
    revenue: "$1,200",
    menu: "Seblak Setan",
  },
  {
    id: 2,
    date: "Sun, Aug 2 2023",
    customers: 99,
    revenue: "$1,123",
    menu: "Bakso Urat",
  },
  {
    id: 3,
    date: "Mon, Aug 3 2023",
    customers: 80,
    revenue: "$1,143",
    menu: "Seblak Balado",
  },
  {
    id: 4,
    date: "Tue, Aug 4 2023",
    customers: 76,
    revenue: "$1,200",
    menu: "Japanese Rice",
  },
  {
    id: 5,
    date: "Wed, Aug 5 2023",
    customers: 87,
    revenue: "$1,234",
    menu: "Bakso Beranak",
  },
];

const RevenueDashboard = () => {
  return (
    <div className="flex min-h-screen overflow-hidden text-black bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 min-h-screen bg-white border-r">
        <div className="flex items-center p-4 space-x-2 border-b">
          <div className="p-2 text-white bg-purple-600 rounded-lg">
            <span className="font-bold">PayPoint</span>
          </div>
        </div>

        <nav className="p-4">
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 space-x-3 text-gray-700 rounded-lg hover:bg-purple-50"
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 space-x-3 text-white bg-purple-600 rounded-lg"
            >
              <DollarSign className="w-5 h-5" />
              <span>Revenue</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 space-x-3 text-gray-700 rounded-lg hover:bg-purple-50"
            >
              <Users className="w-5 h-5" />
              <span>Customers</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 space-x-3 text-gray-700 rounded-lg hover:bg-purple-50"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Products</span>
            </a>
          </div>

          <div className="pt-8 mt-8 space-y-2 border-t">
            <a
              href="#"
              className="flex items-center px-4 py-2 space-x-3 text-gray-700 rounded-lg hover:bg-purple-50"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 space-x-3 text-red-600 rounded-lg hover:bg-red-50"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </div>

      <div className="flex-1">
        {/* Navbar */}
        <nav className="flex items-center justify-between p-4 bg-white border-b">
          <span className="font-semibold">Revenue</span>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 text-white border rounded-lg">
              <option>Dining Room</option>
            </select>
            <button className="flex items-center px-4 py-2 text-white bg-gray-900 rounded-lg">
              ← New Order
            </button>
            <Bell className="w-6 h-6" />
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 text-white bg-green-600 rounded-full">
                A
              </div>
              <div>
                <div className="font-semibold">Ahyar Ganz</div>
                <div className="text-sm text-gray-500">Cashier 1</div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Dashboard</span>
              <span>/</span>
              <span>Revenue</span>
            </div>
            <button className="flex items-center px-4 py-2 space-x-2 text-white border rounded-lg">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>

          {/* Revenue Card */}
          <div className="p-6 mb-8 bg-white rounded-lg shadow-sm">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">Total Revenue</h2>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">$1200.44</span>
                <span className="text-sm text-green-500">
                  ↑ 2.5% From last month
                </span>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#FF9533"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search data..."
                  className="px-4 py-2 border rounded-lg"
                />
                <select className="px-4 py-2 text-white border rounded-lg">
                  <option>August 2023</option>
                </select>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="mb-2 text-right text-gray-600">
                Total Customer: 1,200 Customer
              </div>
              <table className="w-full">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-4 py-3 text-left">NO</th>
                    <th className="px-4 py-3 text-left">ORDER DATE</th>
                    <th className="px-4 py-3 text-left">TOTAL CUSTOMER</th>
                    <th className="px-4 py-3 text-left">REVENUE</th>
                    <th className="px-4 py-3 text-left">POPULAR MENU</th>
                    <th className="px-4 py-3 text-left">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b"
                    >
                      <td className="px-4 py-3">{row.id}</td>
                      <td className="px-4 py-3">{row.date}</td>
                      <td className="px-4 py-3">{row.customers}</td>
                      <td className="px-4 py-3">{row.revenue}</td>
                      <td className="px-4 py-3">{row.menu}</td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button className="text-red-500">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                          <button className="text-green-500">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueDashboard;
