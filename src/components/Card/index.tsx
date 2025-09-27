import Rating from '../Rating';
import { Link } from 'react-router-dom';
import { routers } from 'utils/consts';

interface CardProps {
  id?: number | string;
  title: string;
  price: string;
  imageUrl?: string;
  rating?: number;
}  

const Card: React.FC<CardProps> = ({ title, price, imageUrl, ...props }) => {
  return (
    <div className='w-72 h-112 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition'>
      <div className='aspect-square bg-white flex items-center justify-center overflow-hidden'>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className='object-cover w-full h-full p-5'
          />
        ) : (
          <span className='text-gray-400 text-sm'>No Image</span>
        )}
      </div>
      <Link to={routers.product} className='p-4'>
        <h3 className='line-clamp-3 h-15 text-sm font-semibold mb-2 px-4'>{title}</h3>
        <p className='text-gray-600 text-sm text-center font-thin'>{price}</p>
        <div className='mt-2 flex justify-center'>
          <Rating rating={props.rating ?? 0} />
        </div>
        
      </Link>
    </div>
  );
};

export default Card;