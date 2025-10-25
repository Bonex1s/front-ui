import { routers } from '@/utils/consts';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({title}) => {
  return <>
    <nav aria-label='Breadcrumb'className='px-8 py-5' >
      <ol className='flex items-center gap-1 text-sm text-gray-700 dark:text-gray-200'>
        <Link to='/' className='block transition-colors hover:text-gray-900 dark:hover:text-white'>
          <li> Home</li>
        </Link>
        <li className='rtl:rotate-180'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='size-4'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </li>
        <Link to={routers.productCollection} className='block transition-colors hover:text-gray-900 dark:hover:text-white'>
          <li>Category</li>
        </Link>

        <li className='rtl:rotate-180'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='size-4'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </li>

        <li>
          <a href='#' className='block transition-colors hover:text-gray-900 dark:hover:text-white'>
            {title}
          </a>
        </li>
      </ol>
    </nav>

  </>;
};

export default Breadcrumb;