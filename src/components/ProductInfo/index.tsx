import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import ProductGallery from '../ProductGallery';
import localize from '@/utils/localize';
import ColorSelector from '../ColorSelect';

const ProductInfo = () => {
  const { id } = useParams<{ id: string }>();
  const product = localize.temporaryCards.find(item => item.id === Number(id));
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.variants?.[0]?.colorName || ''
  );
  const currentVariant = product?.variants?.find(
    v => v.colorName === selectedColor
  );
  if (!product) {
    return <p className='p-10 text-center text-gray-700'>Товар не знайдено</p>;
  }
  const imagesToShow =
    currentVariant?.images?.length && selectedColor
      ? currentVariant.images
      : product.imageUrl;
  return (
    <div>
      <Breadcrumb title={product.title} />
      <div className='flex justify-center min-h-screen p-10 w-11/12 mx-auto'>
        {/* Галерея картинок */}
        <ProductGallery images={imagesToShow} />
        <div className='flex flex-col ml-10 gap-4 w-1/2'>
          <h1 className='font-bold text-xl'>{product.title}</h1>
          <p className='text-black/50'>Код товару: 2000000128740</p>
          <ul className='grid grid-cols-2 gap-10 text-sm text-gray-700'>
            <li>✔ Якісна шкіра</li>
            <li>✔ Елегантний дизайн</li>
            <li>✔ Надійний захист корпусу</li>
            <li>✔ Приємний на дотик матеріал</li>
          </ul>
          {product.variants && product.variants.length > 0 && (
            <ColorSelector
              colors={product.variants.map(v => ({
                colorName: v.colorName,
                colorHex: v.colorHex,
              }))}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />
          )}
          <h2 className='text-lg font-semibold'>{product.price}</h2>
          <button className='px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition'>
            Додати в кошик
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;