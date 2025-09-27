import { useState } from 'react';
import PopularCard from '../PopularCard';
import buttonClass from '@/utils/classButton';

export default function Popular() {
  const [activeButton, setActiveButton] = useState('popular');
  return (
    <>
      <div className='flex gap-40 justify-center mt-10' >
        <button className={buttonClass(activeButton, 'popular')} onClick={() => setActiveButton('popular')}>Популярне</button>
        <button className={buttonClass(activeButton, 'all')} onClick={() => setActiveButton('all')}>Усі товари</button>
      </div>
      {activeButton === 'popular' && <PopularCard />}
      {activeButton === 'all' && <div className='flex justify-center mt-20 mb-20 text-2xl font-semibold h-200 w-full '>Скоро буде...</div>}
      
    </>
  );
}