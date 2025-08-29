import React from 'react';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    // {
    //   title: 'Revenue',
    //   value: '$45,678',
    //   change: '+8%',
    //   icon: DollarSign,
    //   color: 'bg-green-500'
    // },
    // {
    //   title: 'Growth',
    //   value: '23.5%',
    //   change: '+5%',
    //   icon: TrendingUp,
    //   color: 'bg-orange-500'
    // },
    // {
    //   title: 'Active Sessions',
    //   value: '1,234',
    //   change: '+15%',
    //   icon: Activity,
    //   color: 'bg-purple-500'
    // }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">New user registered</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-colors">
              <p className="font-medium text-gray-800">Add New User</p>
              <p className="text-sm text-gray-600">Create a new user account</p>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-colors">
              <p className="font-medium text-gray-800">Generate Report</p>
              <p className="text-sm text-gray-600">Create monthly analytics report</p>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-colors">
              <p className="font-medium text-gray-800">System Settings</p>
              <p className="text-sm text-gray-600">Configure system preferences</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;