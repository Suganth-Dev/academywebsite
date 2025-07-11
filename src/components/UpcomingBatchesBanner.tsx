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
      startDate: 'Every Wednesday',
      location: 'Hyderabad',
      seatsLeft: 12,
      totalSeats: 15,
      
    },
    {
      course: 'Women Program',
      startDate: 'Every Friday',
      location: 'Hyderabad',
      seatsLeft: 5,
      totalSeats: 15,
      
    }
  ];

  const handleApplyClick = () => {
    navigate('/apply');
  };

  return (
   <section className="py-10 lg:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Main Banner */}
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 lg:p-10 mb-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          New Batch Starts Every Monday – Few Seats Left!
        </h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Reserve your seat before it's gone. Limited seats per batch for personalized attention.
        </p>
      </div>

      {/* Urgency Alert */}
      <div className="bg-red-100 border border-red-200 rounded-lg p-3 mb-6 max-w-xl mx-auto text-center text-sm text-red-700 font-medium flex items-center justify-center">
        <AlertCircle className="w-4 h-4 mr-2 text-red-600" />
        Few Seats Left in upcoming batches
      </div>

      {/* Batch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {upcomingBatches.map((batch, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">{batch.course}</h3>
            <div className="space-y-1 text-xs text-gray-600 mb-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {batch.startDate}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {batch.location}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {batch.seatsLeft}/{batch.totalSeats} seats left
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  batch.seatsLeft <= 5 ? 'bg-red-500' :
                  batch.seatsLeft <= 10 ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${((batch.totalSeats - batch.seatsLeft) / batch.totalSeats) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={handleApplyClick}
          className="bg-[#F15A24] text-white font-bold px-6 py-3 rounded-md hover:bg-[#D64A1A] hover:shadow-md transform hover:-translate-y-0.5 transition duration-200 text-sm flex items-center justify-center mx-auto"
        >
          Apply for Next Batch
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>

    {/* Additional Info */}
    <div className="bg-gray-50 rounded-2xl p-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Why Start This Monday?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center justify-center">
          <Clock className="w-5 h-5 text-[#26A65B] mr-2" />
          <span className="font-medium text-gray-700">5-Day Fast Track</span>
        </div>
        <div className="flex items-center justify-center">
          <Users className="w-5 h-5 text-[#26A65B] mr-2" />
          <span className="font-medium text-gray-700">Small Batch Size</span>
        </div>
        <div className="flex items-center justify-center">
          <Calendar className="w-5 h-5 text-[#26A65B] mr-2" />
          <span className="font-medium text-gray-700">Weekend Friendly</span>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default UpcomingBatchesBanner;