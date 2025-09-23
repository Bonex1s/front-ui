import PromoBanner from 'components/PromoBanner';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo';
import { routers } from 'utils/consts';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import DropdownMenu from 'components/DropdownMenu';
import localize from 'utils/localize';

export default function Header() {
  return (
    <>
      <PromoBanner />
      <div className='border border-gray-200 sticky top-0 py-3 z-10 bg-white mb-10'>
        <div className='flex flex-row items-center justify-start'>
          <Link to={routers.product} className='w-23 pl-6'>
            <Logo />
          </Link>
          
          <ul className='flex text-sm font-medium text-gray-600 ml-10'>
            <li className='relative'>
              <DropdownMenu title={localize.HeaderTitle[0]} 
                groups={localize.caseSubMenu}/></li>

            <li className='relative'>
              <DropdownMenu title={localize.HeaderTitle[1]} 
                groups={localize.caseSubMenu}/></li>
            <li className='relative'>
              <DropdownMenu title={localize.HeaderTitle[2]} 
                groups={localize.caseSubMenu}/></li>
            <li className='relative'>
              <DropdownMenu title={localize.HeaderTitle[3]} 
                groups={localize.caseSubMenu}/></li>
            <li className='relative'>
              <DropdownMenu title={localize.HeaderTitle[4]} 
                groups={localize.caseSubMenu}/></li>

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
            <button
              type='button'
              className='text-black w-5 hover:cursor-pointer hover:text-main'
            >
              <ShoppingCart />
            </button>
            <button
              type='button'
              className='text-black w-5 hover:cursor-pointer hover:text-main'
            >
              <User />
            </button>
            
          </div>
        </div>
      </div></>
  );
}
