import React from "react";
import { FaStar } from "react-icons/fa";

//define props type
type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};
const ReviewCard = ({ review }: Props) => {
  const { name, review: clientReview, rating, profession, image } = review;
  return (
    <div className="rounded-md overflow-hidden bg-[140c1c] m-4">
      <div className="p-6">
        <img src="/images/q.png" alt="image" width={50} height={50} />
        <p className="text-white text-opacity-70">{clientReview}</p>
        <img
          src="/images/q.png"
          alt="image"
          width={50}
          height={50}
          className="ml-auto"
        />
      </div>
      <div className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-500" />
      </div>
      <div className="flex items-center space-x-6 pb-6">
        <div>
          <img
            src={image}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-white">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="text-sm text-opacity-70">{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
