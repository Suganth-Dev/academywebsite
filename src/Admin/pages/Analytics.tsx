import React from 'react';
import { BarChart3, PieChart, TrendingUp, Activity } from 'lucide-react';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <p className="text-gray-600">Comprehensive analytics and insights</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">45,678</p>
              <p className="text-sm text-green-600 mt-1">+12% from last week</p>
            </div>
            <div className="bg-blue-500 p-3 rounded-full">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">12,345</p>
              <p className="text-sm text-green-600 mt-1">+8% from last week</p>
            </div>
            <div className="bg-green-500 p-3 rounded-full">
              <PieChart className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">34.5%</p>
              <p className="text-sm text-red-600 mt-1">-2% from last week</p>
            </div>
            <div className="bg-orange-500 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">3.2 min</p>
              <p className="text-sm text-green-600 mt-1">+5% from last week</p>
            </div>
            <div className="bg-purple-500 p-3 rounded-full">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic Sources</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart placeholder - Traffic sources breakdown</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Trends</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart placeholder - Revenue trends over time</p>
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Pages</h3>
        <div className="space-y-4">
          {[
            { page: '/dashboard', views: '12,345', percentage: '25%' },
            { page: '/products', views: '9,876', percentage: '20%' },
            { page: '/about', views: '7,654', percentage: '15%' },
            { page: '/contact', views: '5,432', percentage: '11%' },
            { page: '/blog', views: '4,321', percentage: '9%' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{item.page}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-orange-500 h-2 rounded-full" 
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </div>
              <div className="ml-4 text-right">
                <p className="text-sm font-medium text-gray-800">{item.views}</p>
                <p className="text-xs text-gray-500">{item.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;