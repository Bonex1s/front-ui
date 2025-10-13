import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubMenuItem {
  id: number | string;
  label: string;
  link?: string;
}

interface SubMenuGroup {
  title: string;         
  items: SubMenuItem[];
}

interface DropdownMenuProps {
  title: string;          
  groups: SubMenuGroup[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, groups }) => {
  return (
    <div className='group'>
      <button className='flex items-center py-2 px-4 rounded-md bg-white hover:text-beigeCustom text-black'>
        {title}
        <ChevronDown className='pl-2'/>
      </button>
      <div className='absolute left-0 w-screen bg-white shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition flex gap-8 p-8'>
        {groups.map(group => (
          <div key={group.title}>
            <div className='font-semibold mb-2 text-black'>{group.title}</div>
            <ul>
              {group.items.map(item => (
                <li key={item.id} className='py-1 hover:bg-main cursor-pointer text-black px-3 rounded-sm'>
                  {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DropdownMenu;