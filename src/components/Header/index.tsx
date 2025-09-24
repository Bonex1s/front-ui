import PromoBanner from 'components/PromoBanner';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import { routers } from 'utils/consts';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import DropdownMenu from 'components/DropdownMenu';
import localize from 'utils/localize';
import AccountMenu from 'components/Account';
import SheetMenu from '../Sheet';

export default function Header() {
  return (
    <>
      <PromoBanner />
      <div className='border border-gray-200 sticky top-0 py-3 z-10 bg-white'>
        <div className='flex flex-row items-center justify-start'>
          <Link to={routers.product} className='w-23 pl-6'>
            <Logo />
          </Link>
          
          <ul className='flex text-sm font-medium text-gray-600 ml-10'>
            {localize.HeaderTitle.map((item, index) => (
              <li key={index} className='px-4 hover:text-main hover:cursor-pointer'>
                <DropdownMenu title={item} 
                  groups={localize.caseSubMenu}/>
              </li> ))}
          </ul>
          <div className='flex items-center gap-4 ml-auto pr-6'>
            <button
              type='button'
              className='text-black w-5 hover:cursor-pointer hover:text-main'
            >
              <Search />
            </button>
            <button
              type='button'
              className='text-black w-5 hover:cursor-pointer hover:text-main'
            >
              <Heart />
            </button>
            <SheetMenu/>
            
            <AccountMenu/>
            
          </div>
        </div>
      </div></>
  );
}
