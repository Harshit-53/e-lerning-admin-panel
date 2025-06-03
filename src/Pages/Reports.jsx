import React, { useState, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Area, AreaChart
} from 'recharts';
import { 
  TrendingUp, Users, BookOpen, DollarSign, Award, Calendar, 
  Download, Filter, RefreshCw, Eye, Clock, Target, Activity,
  ArrowUp, ArrowDown, ChevronDown, Search, FileText, Mail
} from 'lucide-react';

const Reports = () => {
  const [dateRange, setDateRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock data - would come from backend API
  const [dashboardData, setDashboardData] = useState({
    overview: {
      totalRevenue: 124500,
      totalUsers: 5842,
      activeUsers: 3391,
      courseCompletions: 1247,
      averageRating: 4.3,
      conversionRate: 12.5
    },
    revenueData: [
      { month: 'Jan', revenue: 8500, users: 450 },
      { month: 'Feb', revenue: 12000, users: 580 },
      { month: 'Mar', revenue: 15500, users: 720 },
      { month: 'Apr', revenue: 18200, users: 890 },
      { month: 'May', revenue: 22100, users: 1150 },
      { month: 'Jun', revenue: 26800, users: 1380 }
    ],
    courseProgress: [
      { course: 'Web Development', enrolled: 1200, completed: 780, revenue: 45000 },
      { course: 'Data Science', enrolled: 950, completed: 520, revenue: 38000 },
      { course: 'UI/UX Design', enrolled: 800, completed: 480, revenue: 28000 },
      { course: 'Machine Learning', enrolled: 650, completed: 290, revenue: 22000 },
      { course: 'Mobile Dev', enrolled: 450, completed: 180, revenue: 15000 }
    ],
    userActivity: [
      { day: 'Mon', logins: 1250, sessions: 890 },
      { day: 'Tue', logins: 1180, sessions: 820 },
      { day: 'Wed', logins: 1320, sessions: 950 },
      { day: 'Thu', logins: 1420, sessions: 1020 },
      { day: 'Fri', logins: 1150, sessions: 780 },
      { day: 'Sat', logins: 890, sessions: 620 },
      { day: 'Sun', logins: 720, sessions: 480 }
    ],
    topPerformers: [
      { name: 'Jacob Martinez', course: 'Web Development', progress: 85, lastActive: '2 hours ago', revenue: 299 },
      { name: 'Emma Johnson', course: 'Data Science', progress: 72, lastActive: '5 hours ago', revenue: 399 },
      { name: 'Michael Brown', course: 'UI/UX Design', progress: 68, lastActive: '1 day ago', revenue: 199 },
      { name: 'Sarah Wilson', course: 'Machine Learning', progress: 45, lastActive: '3 days ago', revenue: 499 },
      { name: 'David Kim', course: 'Mobile Dev', progress: 92, lastActive: '1 hour ago', revenue: 349 }
    ],
    courseDistribution: [
      { name: 'Web Development', value: 35, students: 1200 },
      { name: 'Data Science', value: 28, students: 950 },
      { name: 'UI/UX Design', value: 22, students: 800 },
      { name: 'Machine Learning', value: 15, students: 650 }
    ]
  });

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  // Backend API functions (mock implementations)
  const fetchDashboardData = async (range) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In real app: const response = await fetch(`/api/admin/reports?range=${range}`);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };



const exportReport = async (type) => {
  try {
    const data = {
      type,
      dateRange,
      data: dashboardData,
      exportedAt: new Date().toISOString()
    };
    
    // Create HTML content
    const htmlContent = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1>Admin Report - ${type}</h1>
        <p><strong>Date Range:</strong> ${dateRange}</p>
        <p><strong>Exported At:</strong> ${data.exportedAt}</p>
        
        <h2>Dashboard Data</h2>
        <div>
          ${Object.entries(data.data).map(([key, value]) => `
            <div style="margin-bottom: 10px;">
              <strong>${key}:</strong> ${typeof value === 'object' ? JSON.stringify(value, null, 2) : value}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    const options = {
      margin: 1,
      filename: `admin-report-${type}-${Date.now()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    html2pdf().set(options).from(htmlContent).save();
    
  } catch (error) {
    console.error('Export failed:', error);
  }
};
  const sendReport = async (email) => {
    try {
      // Simulate email sending
      console.log(`Sending report to ${email}`);
      // In real app: await fetch('/api/admin/send-report', { method: 'POST', body: JSON.stringify({ email, data: dashboardData }) });
      alert(`Report sent to ${email}`);
    } catch (error) {
      console.error('Failed to send report:', error);
    }
  };

  useEffect(() => {
    fetchDashboardData(dateRange);
  }, [dateRange]);

  const formatCurrency = (value) => `$${value.toLocaleString()}`;
  const formatNumber = (value) => value.toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Admin Reports</h1>
            <p className="text-sm sm:text-base text-gray-600">
              Last updated: {lastUpdated.toLocaleString()}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
            {/* Date Range Selector */}
            <div className="relative">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => fetchDashboardData(dateRange)}
                disabled={loading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              
              <button
                onClick={() => exportReport('full')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Total Revenue</h3>
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {formatCurrency(dashboardData.overview.totalRevenue)}
            </div>
            <div className="flex items-center text-xs sm:text-sm text-green-600 mt-1">
              <ArrowUp className="w-3 h-3 mr-1" />
              +15.3%
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Total Users</h3>
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {formatNumber(dashboardData.overview.totalUsers)}
            </div>
            <div className="flex items-center text-xs sm:text-sm text-green-600 mt-1">
              <ArrowUp className="w-3 h-3 mr-1" />
              +8.2%
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Active Users</h3>
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {formatNumber(dashboardData.overview.activeUsers)}
            </div>
            <div className="flex items-center text-xs sm:text-sm text-red-600 mt-1">
              <ArrowDown className="w-3 h-3 mr-1" />
              -2.1%
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Completions</h3>
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {formatNumber(dashboardData.overview.courseCompletions)}
            </div>
            <div className="flex items-center text-xs sm:text-sm text-green-600 mt-1">
              <ArrowUp className="w-3 h-3 mr-1" />
              +22.5%
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Avg Rating</h3>
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {dashboardData.overview.averageRating}
            </div>
            <div className="flex items-center text-xs sm:text-sm text-green-600 mt-1">
              <ArrowUp className="w-3 h-3 mr-1" />
              +0.2
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Conversion</h3>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-gray-900">
              {dashboardData.overview.conversionRate}%
            </div>
            <div className="flex items-center text-xs sm:text-sm text-green-600 mt-1">
              <ArrowUp className="w-3 h-3 mr-1" />
              +1.8%
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Revenue Trend */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
              <button
                onClick={() => exportReport('revenue')}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dashboardData.revenueData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'revenue' ? formatCurrency(value) : formatNumber(value),
                      name === 'revenue' ? 'Revenue' : 'New Users'
                    ]}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3B82F6" 
                    fill="#3B82F6" 
                    fillOpacity={0.1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* User Activity */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Weekly User Activity</h3>
              <button
                onClick={() => exportReport('activity')}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dashboardData.userActivity}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip formatter={(value) => [formatNumber(value), 'Count']} />
                  <Bar dataKey="logins" fill="#3B82F6" name="Logins" />
                  <Bar dataKey="sessions" fill="#10B981" name="Sessions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Course Performance */}
          <div className="xl:col-span-2 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Course Performance</h3>
              <button
                onClick={() => exportReport('courses')}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Course</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Enrolled</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Completed</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Completion Rate</th>
                    <th className="text-left py-3 text-sm font-medium text-gray-500">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.courseProgress.map((course, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 text-sm font-medium text-gray-900">{course.course}</td>
                      <td className="py-3 text-sm text-gray-600">{formatNumber(course.enrolled)}</td>
                      <td className="py-3 text-sm text-gray-600">{formatNumber(course.completed)}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(course.completed / course.enrolled) * 100}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-600">
                            {Math.round((course.completed / course.enrolled) * 100)}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 text-sm font-medium text-green-600">
                        {formatCurrency(course.revenue)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Course Distribution */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Distribution</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dashboardData.courseDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dashboardData.courseDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {dashboardData.courseDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    {item.name}
                  </div>
                  <span className="text-gray-600">{item.students} students</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Performers & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Top Performing Students */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Top Performing Students</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm">View All</button>
            </div>
            <div className="space-y-4">
              {dashboardData.topPerformers.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{student.name}</div>
                    <div className="text-xs text-gray-500">{student.course}</div>
                    <div className="flex items-center mt-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-600">{student.progress}%</span>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-sm font-medium text-green-600">
                      {formatCurrency(student.revenue)}
                    </div>
                    <div className="text-xs text-gray-500">{student.lastActive}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={() => sendReport('admin@example.com')}
                className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-900 font-medium">Email Weekly Report</span>
                </div>
                <ChevronDown className="w-4 h-4 text-blue-600 rotate-270" />
              </button>
              
              <button
                onClick={() => exportReport('detailed')}
                className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-green-900 font-medium">Generate Detailed Report</span>
                </div>
                <ChevronDown className="w-4 h-4 text-green-600 rotate-270" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-purple-900 font-medium">Real-time Analytics</span>
                </div>
                <ChevronDown className="w-4 h-4 text-purple-600 rotate-270" />
              </button>
              
              <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-orange-900 font-medium">User Management</span>
                </div>
                <ChevronDown className="w-4 h-4 text-orange-600 rotate-270" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;