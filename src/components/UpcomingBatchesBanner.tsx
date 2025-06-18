import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UpcomingBatchesBanner: React.FC = () => {
  const navigate = useNavigate();

  const upcomingBatches = [
    {
      course: 'DGCA Pilot Training',
      startDate: 'Every Monday',
      location: 'Hyderabad',
      seatsLeft: 8,
      totalSeats: 20,
     
    },
    {
      course: 'Agriculture Training',
      startDate: 'Every Monday',
      location: 'Pune',
      seatsLeft: 12,
      totalSeats: 15,
      
    },
    {
      course: 'Women Program',
      startDate: 'Every Monday',
      location: 'Bangalore',
      seatsLeft: 5,
      totalSeats: 15,
      
    }
  ];

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              New Batch Starts Every Monday – Few Seats Left!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reserve your seat before it's gone. Limited seats available in each batch to ensure personalized attention.
            </p>
          </div>

          {/* Urgency Alert */}
          <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-800 font-bold">Few Seats Left</span>
              <span className="text-red-700 ml-2">in upcoming batches</span>
            </div>
          </div>

          {/* Batch Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {upcomingBatches.map((batch, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-gray-900">{batch.course}</h3>
                  
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{batch.startDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{batch.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{batch.seatsLeft}/{batch.totalSeats} seats left</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        batch.seatsLeft <= 5 ? 'bg-red-500' :
                        batch.seatsLeft <= 10 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${((batch.totalSeats - batch.seatsLeft) / batch.totalSeats) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={handleApplyClick}
              className="bg-[#F15A24] text-white font-bold px-10 py-5 rounded-lg hover:bg-[#D64A1A] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-lg flex items-center justify-center mx-auto"
            >
              Apply for Next Batch
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Start This Monday?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#26A65B] mr-3" />
              <span className="font-medium text-gray-700">5-Day Fast Track</span>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-6 h-6 text-[#26A65B] mr-3" />
              <span className="font-medium text-gray-700">Small Batch Size</span>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#26A65B] mr-3" />
              <span className="font-medium text-gray-700">Weekend Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatchesBanner;