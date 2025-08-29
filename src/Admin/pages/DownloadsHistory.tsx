import React from 'react';
import { Download, FileText, Calendar, User } from 'lucide-react';

const DownloadsHistory: React.FC = () => {
  const downloads = [
    {
      id: 1,
      fileName: 'income-reports.csv',
      user: 'Admin',
      date: '2024-01-15 10:30 AM',
      size: '2.3 MB',
      type: 'CSV'
    },
    {
      id: 2,
      fileName: 'user-data.csv',
      user: 'Admin',
      date: '2024-01-14 03:45 PM',
      size: '1.8 MB',
      type: 'CSV'
    },
    {
      id: 3,
      fileName: 'feedbacks.csv',
      user: 'Admin',
      date: '2024-01-13 11:20 AM',
      size: '856 KB',
      type: 'CSV'
    },
    {
      id: 4,
      fileName: 'employee-data.csv',
      user: 'Admin',
      date: '2024-01-12 09:15 AM',
      size: '1.2 MB',
      type: 'CSV'
    },
    {
      id: 5,
      fileName: 'analytics-report.csv',
      user: 'Admin',
      date: '2024-01-11 02:30 PM',
      size: '3.1 MB',
      type: 'CSV'
    }
  ];

  const stats = [
    {
      title: 'Total Downloads',
      value: '247',
      icon: Download,
      color: 'bg-blue-500'
    },
    {
      title: 'This Month',
      value: '45',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'File Types',
      value: '3',
      icon: FileText,
      color: 'bg-orange-500'
    },
    {
      title: 'Total Size',
      value: '156 MB',
      icon: User,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Downloads History</h1>
        <p className="text-gray-600">Track all file downloads and exports</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Downloads Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Recent Downloads</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">File Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {downloads.map((download) => (
                <tr key={download.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-sm font-medium text-gray-900">{download.fileName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {download.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{download.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-orange-600 hover:text-orange-900">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DownloadsHistory;