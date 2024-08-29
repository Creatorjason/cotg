"use client";

import React from "react";
import { Rating } from "react-simple-star-rating";

const testimonials = [
  {
    rating: 5,
    text: "He listened to my preferences and gave me a flawless haircut with attention to detail",
    author: "Caleb Joshua",
  },
  {
    rating: 5,
    text: "My stylist listens to my needs and delivers a perfect cut",
    author: "Emmanuel Adeleye",
  },
  {
    rating: 5,
    text: "COTG stylist are always prompt and deliver amazing services",
    author: "Chukwuemeka Obi",
  },
];

const TestimonialCard = ({ rating, text, author }) => {
  return (
    <div className="flex flex-col items-center p-12 rounded-lg shadow-md bg-indigo-50 text-center w-full  mb-4 md:mb-0">
      <Rating
        initialValue={rating}
        readonly={true}
        size={24}
        SVGstyle={{ display: "inline" }}
        fillColor="purple"
        className="flex mb-4"
      />
      <p className="text-sm mb-4 text-gray-600">{text}</p>
      <p className="text-sm font-semibold">{author}</p>
    </div>
  );
};

const TestimonialGrid = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between p-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          rating={testimonial.rating}
          text={testimonial.text}
          author={testimonial.author}
        />
      ))}
    </div>
  );
};

export default TestimonialGrid;
