import { useState } from 'react';
import { X } from 'lucide-react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; 

  return (
    <div className='bg-black text-sm font-medium text-white px-2 flex items-center justify-center relative'>
      <p className='text-center'>
        Знижка 100 грн на перше замовлення! Гарячі новинки та акції.
      </p>
      <button
        onClick={() => setVisible(false)}
        className='absolute right-4 text-white hover:text-gray-400'
        aria-label='Закрити банер'
      >
        <X size={18} />
      </button>
    </div>
  );
}