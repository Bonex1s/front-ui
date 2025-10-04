import localize from 'utils/localize';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
  const [showAll, setShowAll] = useState(false);
  const newsToShow = showAll ? localize.newsBlock : localize.newsBlock.slice(0, 6);

  return (
    <div className='px-4'>
      <div className='text-3xl font-bold text-center mt-20 mb-10'>
        Новини та статті
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto w-[85%]'>
        {newsToShow.map((item, id) => (
          <Link to={'/'} key={id} className='flex items-center text-sm bg-white rounded-md shadow p-3'>
            <div className='w-[240px] h-[135px] flex-shrink-0 overflow-hidden rounded-md mr-4'>
              <img
                className='w-full h-full object-cover'
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
          className='px-8 py-2 text-sm font-thin border border-black hover:bg-black hover:text-white transition'
        >
          {showAll ? 'Менше' : 'Більше'}
        </button>
      </div>
    </div>
  );
};

export default News;