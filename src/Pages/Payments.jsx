import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { DollarSign, Users } from "lucide-react";

const PaymentsPage = () => {
  const [totalRevenue, setTotalRevenue] = useState(5912);
  const [activeUsers, setActiveUsers] = useState(3582);

  const [revenueData, setRevenueData] = useState([
    { course: "Course 1", revenue: 30 },
    { course: "Course 2", revenue: 25 },
    { course: "Course 3", revenue: 32 },
    { course: "Course 4", revenue: 38 },
    { course: "Course 5", revenue: 45 },
  ]);

  const [payments, setPayments] = useState([
    {
      student: "Jacob Martinez",
      course: "Web Development",
      amount: 200,
      status: "Paid",
      date: "Jun 24",
    },
    {
      student: "Emma Johnson",
      course: "Data Science",
      amount: 150,
      status: "Refunded",
      date: "Jun 20",
    },
    {
      student: "Oliviya Wilson",
      course: "Machine Learning",
      amount: 250,
      status: "Pending",
      date: "Jun 25",
    },
  ]);

  const getStatusBadge = (status) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "Paid":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case "Refunded":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "Pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payments Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor revenue and payment transactions
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Revenue */}
          {/* Total Revenue */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full mb-3">
                <DollarSign className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Total Revenue
              </h3>
            </div>
            <div className="text-4xl font-bold text-gray-900 tracking-tight">
              ${totalRevenue.toLocaleString()}
            </div>
          </div>

          {/* Active Users */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full mb-3">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Active Users
              </h3>
            </div>
            <div className="text-4xl font-bold text-gray-900 tracking-tight">
              {activeUsers.toLocaleString()}
            </div>
          </div>

          {/* Revenue by Course Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Revenue by Course
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis
                    dataKey="course"
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis hide />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Payments Table (Desktop Only) */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Payments
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {payment.student}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">{payment.course}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-semibold text-gray-900">
                          ${payment.amount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={getStatusBadge(payment.status)}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {payment.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Mobile-friendly Cards (Mobile Only) */}
        <div className="block md:hidden mt-6 grid grid-cols-1 gap-4">
          {payments.map((payment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">
                  {payment.student}
                </h4>
                <span className={getStatusBadge(payment.status)}>
                  {payment.status}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-1">{payment.course}</div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">${payment.amount}</span>
                <span className="text-sm text-gray-500">{payment.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
