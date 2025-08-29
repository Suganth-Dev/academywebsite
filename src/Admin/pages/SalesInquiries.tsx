import React from 'react';
import { ShoppingCart, TrendingUp, DollarSign, Package } from 'lucide-react';

const SalesInquiries: React.FC = () => {
  const inquiries = [
    {
      id: 1,
      customer: 'John Doe',
      email: 'john@example.com',
      product: 'Drone Simulator Pro',
      status: 'Pending',
      date: '2024-01-15',
      value: '$299'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      email: 'jane@example.com',
      product: 'Drone Simulator Basic',
      status: 'Completed',
      date: '2024-01-14',
      value: '$199'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      email: 'mike@example.com',
      product: 'Drone Simulator Enterprise',
      status: 'In Progress',
      date: '2024-01-13',
      value: '$599'
    }
  ];

  const stats = [
    {
      title: 'Total Inquiries',
      value: '156',
      change: '+12%',
      icon: ShoppingCart,
      color: 'bg-blue-500'
    },
    {
      title: 'Conversion Rate',
      value: '68%',
      change: '+8%',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    // {
    //   title: 'Total Value',
    //   value: '$45,678',
    //   change: '+15%',
    //   icon: DollarSign,
    //   color: 'bg-orange-500'
    // },
    {
      title: 'Products Sold',
      value: '89',
      change: '+5%',
      icon: Package,
      color: 'bg-purple-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Sales Inquiries</h1>
        <p className="text-gray-600">Track and manage sales inquiries and leads</p>
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

      {/* Inquiries Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Recent Inquiries</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{inquiry.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.value}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
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

export default SalesInquiries;