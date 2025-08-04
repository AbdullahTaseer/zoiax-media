import React from "react";
import { Rating } from 'react-simple-star-rating';

interface StarRatingCardProps {
  handleRating?: (value: number) => void;
}

const StarRatingCard = ({ handleRating }: StarRatingCardProps) => {


  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value: number, index: number) => console.log(value, index)

  return (
    <div>
      <div className='App'>
        <Rating
          size={22}
          readonly={true}
          iconsCount={5}
          SVGclassName={`inline-block`}
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          allowHover={false}
          initialValue={5}
        />
      </div>
    </div>
  );
};

export default StarRatingCard;