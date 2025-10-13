import localize from 'utils/localize';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewsBlock = () => {
  const [showAll, setShowAll] = useState(false);
  const newsToShow = showAll ? localize.newsBlock : localize.newsBlock.slice(0, 6);

  return (
    <div className='px-4'>
      <div className='text-2xl font-semibold text-center mt-20 mb-10'>
        Новини та статті
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto w-[85%]'>
        {newsToShow.map((item, id) => (
          <Link to={'/'} key={id} className='flex items-center text-sm bg-white shadow p-3 rounded-sm'>
            <div className='w-[240px] h-[135px] flex-shrink-0 overflow-hidden mr-4'>
              <img
                className='w-full h-full object-cover rounded-sm'
                src={item.url}
                alt={item.alt}
              />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold'>{item.title}</h3>
              {item.date && <p className='text-gray-600 mt-1 text-sm font-thin'>{item.date}</p>}
              {item.time && <p className='text-gray-400 mt-1 text-sm font-thin'>{item.time}</p>}
            </div>
          </Link>
        ))}
      </div>
      <div className='text-center mt-8 mb-20'>
        <button 
          onClick={() => setShowAll(!showAll)}
          className='btn-primary'
        >
          {showAll ? 'Менше' : 'Більше'}
        </button>
      </div>
    </div>
  );
};

export default NewsBlock;