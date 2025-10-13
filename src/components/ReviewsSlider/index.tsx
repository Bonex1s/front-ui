import React, { useState } from 'react';

type Review = {
  id: number;
  text: string;
};

const reviewsData: Review[] = [
  {
    id: 1,
    text: '"Замовляв у theGadget захисне скло та чохол — усе супер! Скло якісне, легко наклеїлося без бульбашок, а чохол просто бомба. Дуже приємний персонал і величезний вибір дизайнів!"',
  },
  {
    id: 2,
    text: '"Купую у theGadget вже не вперше — завжди задоволений! Тут тільки брендове захисне скло і чохли відомих марок. Обслуговування ввічливе, доставка швидка, все на високому рівні."',
  },
  {
    id: 3,
    text: '"Замовляла у theGadget стильний чохол і скло — прийшло швидко, все якісне! Дуже великий вибір дизайнів, приємне спілкування з персоналом. Рекомендую всім!"',
  },
];

const ReviewsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const getPositionClasses = (index: number): string => {
    if (index === activeIndex) {
      return 'z-30 scale-110 opacity-100 bg-gray-200 shadow-lg translate-x-0';
    }
    if (index === (activeIndex + 1) % reviewsData.length) {
      return 'translate-x-[550px] scale-70 opacity-60 z-20';
    }
    if (index === (activeIndex - 1 + reviewsData.length) % reviewsData.length) {
      return '-translate-x-[550px] scale-70 opacity-60 z-20';
    }
    return 'opacity-0 scale-75 z-10 pointer-events-none';
  };

  return (
    <div className='relative flex justify-center items-center h-[410px] mt-20 overflow-hidden pb-30'>
      {reviewsData.map((review, index) => (
        <div
          key={review.id}
          onClick={() => handleClick(index)}
          className={`
            absolute w-[550px] h-[250px] bg-gray-300 
            flex items-center justify-center text-center
            px-6 py-4 text-gray-800 font-light text-base cursor-pointer
            transition-all duration-700 ease-in-out transform
            ${getPositionClasses(index)}
          `}
        >
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSlider;