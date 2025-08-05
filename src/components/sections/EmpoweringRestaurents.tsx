import React from 'react';
import { userProfiles } from '@/lib/MockData';
import EmpoweringCard from '@/components/cards/EmpoweringCard';
import { Search } from 'lucide-react';


const EmpoweringRestaurents = () => {

  const categories = [
    "Restaurants",
    "Beauty",
    "Fitness",
    "Fashion",
    "Travel",
    "Health",
    "Lifestyle",
    "Personal",
    "Restaurants",
    "Photography"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-orange-50 py-10 px-[5%] max-[768px]:px-4">

      <h1 className="text-4xl max-[1024px]:text-2xl font-bold text-gray-800 mb-8 text-center max-w-xl mx-auto">
        Empowering Restaurants with Influencer and Modern Marketing
      </h1>

      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for any services..."
            className="w-full px-4 py-2.5 text-md placeholder:text-md bg-gray-800 text-white rounded-lg pl-4 pr-12 focus:outline-none placeholder:text-[#DBDBDB]"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Search className='text-[#DBDBDB]' />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 max-[600px]:px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-200 text-sm max-[600px]:text-[12px] font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-full mx-auto">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {userProfiles.map((profile) => (
            <EmpoweringCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              role={profile.role}
              bigImageSrc={profile.bigImageSrc}
              smallImageSrc={profile.smallImgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmpoweringRestaurents;