import localize from '@/utils/localize';
import { Link } from 'react-router-dom';

interface FooterMenuItem {
  id: number;
  sub: string;
}

interface FooterMenuBlock {
  title: string;
  items: FooterMenuItem[];
}

const FooterMenu: React.FC = () => {
  return <div
    className='grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800'
  >   
    {localize.FooterMenu.map((menu: FooterMenuBlock, index: number) => (
      <div key={index}>
        <p className='font-medium text-main dark:text-white'>{menu.title}</p>
        <ul className='mt-6 space-y-4 text-sm'>
          {menu.items.map(item => (
            <li key={item.id}>
              <Link to='/' className='text-white transition hover:text-main dark:text-gray-200 font-thin'>
                {item.sub}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}       
  </div>;
};

export default FooterMenu;