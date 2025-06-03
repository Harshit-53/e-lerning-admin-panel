import React, { useState } from 'react';
import { Star, Filter, Search, TrendingUp, MessageSquare, Users, Calendar, ChevronDown, Eye, MoreVertical } from 'lucide-react';

const Feedback = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [feedbackStats, setFeedbackStats] = useState({
    totalFeedbacks: 87,
    averageRating: 4.2,
    responseRate: 68,
    positivePercentage: 78
  });

  const [feedbackData, setFeedbackData] = useState([
    {
      id: 1,
      type: 'course',
      course: 'Web Development Bootcamp',
      student: 'Sarah Johnson',
      rating: 4.5,
      feedback: 'Very informative course with hands-on projects. The instructor explained complex concepts clearly and the support was excellent.',
      date: 'Jul 20 2023',
      category: 'Content Quality',
      status: 'published',
      helpful: 12,
      instructor: 'John Smith'
    },
    {
      id: 2,
      type: 'course',
      course: 'Data Science Fundamentals',
      student: 'Michael Chen',
      rating: 3.5,
      feedback: 'Good overall content, but could be improved with more practical examples. Some sections felt rushed.',
      date: 'Jul 18 2023',
      category: 'Course Structure',
      status: 'pending',
      helpful: 8,
      instructor: 'Emily Davis'
    },
    {
      id: 3,
      type: 'course',
      course: 'Graphic Design Fundamentals',
      student: 'Lisa Rodriguez',
      rating: 5.0,
      feedback: 'Excellent course! Highly recommend. The projects were engaging and I learned so much about design principles.',
      date: 'Jul 15 2023',
      category: 'Overall Experience',
      status: 'published',
      helpful: 24,
      instructor: 'David Wilson'
    },
    {
      id: 4,
      type: 'instructor',
      course: 'Machine Learning Basics',
      student: 'Jacob Martinez',
      rating: 4.5,
      feedback: 'The live classes were very helpful and the instructor was always available for questions. Great learning experience.',
      date: 'Jul 10 2023',
      category: 'Instructor Support',
      status: 'published',
      helpful: 15,
      instructor: 'Dr. Amanda Foster'
    },
    {
      id: 5,
      type: 'platform',
      course: 'Platform Experience',
      student: 'Emma Thompson',
      rating: 4.0,
      feedback: 'User-friendly platform with good video quality. Sometimes had connection issues during live sessions.',
      date: 'Jul 08 2023',
      category: 'Technical',
      status: 'reviewed',
      helpful: 6,
      instructor: 'N/A'
    }
  ]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
        ))}
        <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium text-gray-600">{rating.toFixed(1)}</span>
      </div>
    );
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      published: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      reviewed: 'bg-blue-100 text-blue-800',
      flagged: 'bg-red-100 text-red-800'
    };
    
    return `px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status] || 'bg-gray-100 text-gray-800'}`;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Content Quality': 'bg-purple-100 text-purple-800',
      'Course Structure': 'bg-blue-100 text-blue-800',
      'Overall Experience': 'bg-green-100 text-green-800',
      'Instructor Support': 'bg-orange-100 text-orange-800',
      'Technical': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const filteredFeedbacks = feedbackData.filter(feedback => {
    const matchesSearch = feedback.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.feedback.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || feedback.type === selectedFilter;
    const matchesRating = selectedRating === 'all' || 
                         (selectedRating === 'high' && feedback.rating >= 4) ||
                         (selectedRating === 'medium' && feedback.rating >= 3 && feedback.rating < 4) ||
                         (selectedRating === 'low' && feedback.rating < 3);
    
    return matchesSearch && matchesFilter && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
            Feedback Management
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Monitor and manage student feedback across all courses
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Total Feedbacks</h3>
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              {feedbackStats.totalFeedbacks}
            </div>
            <div className="text-xs sm:text-sm text-green-600 mt-1">+12% from last month</div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Average Rating</h3>
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              {feedbackStats.averageRating}
            </div>
            <div className="text-xs sm:text-sm text-green-600 mt-1">+0.3 from last month</div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Response Rate</h3>
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              {feedbackStats.responseRate}%
            </div>
            <div className="text-xs sm:text-sm text-green-600 mt-1">+5% from last month</div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h3 className="text-xs sm:text-sm font-medium text-gray-500">Positive Feedback</h3>
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              {feedbackStats.positivePercentage}%
            </div>
            <div className="text-xs sm:text-sm text-green-600 mt-1">+2% from last month</div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 mb-4 sm:mb-6">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700">Filters & Search</span>
              <Filter className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-col gap-3 sm:gap-4 flex-1 w-full">
                {/* Search */}
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search feedbacks..."
                    className="w-full pl-10 pr-4 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Filter Row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* Filter by Type */}
                  <div className="relative flex-1 sm:flex-none">
                    <select
                      className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="course">Course</option>
                      <option value="instructor">Instructor</option>
                      <option value="platform">Platform</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Filter by Rating */}
                  <div className="relative flex-1 sm:flex-none">
                    <select
                      className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={selectedRating}
                      onChange={(e) => setSelectedRating(e.target.value)}
                    >
                      <option value="all">All Ratings</option>
                      <option value="high">4+ Stars</option>
                      <option value="medium">3-4 Stars</option>
                      <option value="low">Below 3 Stars</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-gray-500 w-full md:w-auto text-left md:text-right">
                Showing {filteredFeedbacks.length} of {feedbackData.length} feedbacks
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course/Student
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating & Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feedback
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredFeedbacks.map((feedback) => (
                  <tr key={feedback.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900 text-sm">{feedback.course}</div>
                        <div className="text-sm text-gray-500">by {feedback.student}</div>
                        {feedback.instructor !== 'N/A' && (
                          <div className="text-xs text-gray-400">Instructor: {feedback.instructor}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {renderStars(feedback.rating)}
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(feedback.category)}`}>
                            {feedback.category}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        <p className="text-sm text-gray-900 line-clamp-3">{feedback.feedback}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Eye className="w-3 h-3 mr-1" />
                          {feedback.helpful} found helpful
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={getStatusBadge(feedback.status)}>
                        {feedback.status.charAt(0).toUpperCase() + feedback.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {feedback.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Approve
                        </button>
                        <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                          Hide
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredFeedbacks.length === 0 && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No feedback found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden space-y-3 sm:space-y-4">
          {filteredFeedbacks.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-gray-200">
              {/* Header Row */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate pr-2">
                    {feedback.course}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">by {feedback.student}</p>
                  {feedback.instructor !== 'N/A' && (
                    <p className="text-xs text-gray-400 mt-1">Instructor: {feedback.instructor}</p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={getStatusBadge(feedback.status)}>
                    {feedback.status.charAt(0).toUpperCase() + feedback.status.slice(1)}
                  </span>
                  <span className="text-xs text-gray-500">{feedback.date}</span>
                </div>
              </div>
              
              {/* Rating and Category */}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                {renderStars(feedback.rating)}
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(feedback.category)}`}>
                  {feedback.category}
                </span>
              </div>
              
              {/* Feedback Text */}
              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                {feedback.feedback}
              </p>
              
              {/* Bottom Row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-3 border-t border-gray-100">
                <div className="flex items-center text-xs text-gray-500">
                  <Eye className="w-3 h-3 mr-1" />
                  {feedback.helpful} found helpful
                </div>
                
                <div className="flex gap-2 sm:gap-3">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View
                  </button>
                  <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                    Approve
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Hide
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State for Mobile */}
          {filteredFeedbacks.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No feedback found</h3>
              <p className="text-sm sm:text-base text-gray-500 px-4">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;