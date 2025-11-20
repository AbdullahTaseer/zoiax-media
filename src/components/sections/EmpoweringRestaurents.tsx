import React from 'react';
import { userProfiles } from '@/lib/MockData';
import EmpoweringCard from '@/components/cards/EmpoweringCard';

const EmpoweringRestaurents = () => {

  return (
    <div className="bg-white px-[5%] max-[768px]:px-4">
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