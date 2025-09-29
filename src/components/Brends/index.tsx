import { Link } from 'react-router-dom';
import localize from 'utils/localize';

interface BrendsUrlsProps {
  id: number;
  url: string;
  alt: string;
}

const Brends: React.FC = () => {
  return (
    <div className='w-full h-24 bg-white rounded-xl  overflow-hidden flex items-center justify-center px-20 my-30'>
      {localize.brandUrls.map((item: BrendsUrlsProps, id: number) => 
        <div className='w-200 m-10 hover:scale-110 transition-all duration-300'>
          <Link to={'/'}>
            <img key={id} src={item.url} alt={item.alt} />
          </Link>
        </div> )}
      
    </div>
  );
};

export default Brends;