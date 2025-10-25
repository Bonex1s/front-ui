import React, { useState, useEffect } from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);
  
  return (
    <div className='flex flex-col items-center w-full max-w-2xl mx-auto'>
      {/* Главное изображение */}
      <div className='w-full max-w-xl aspect-square mb-6'>
        <img
          src={mainImage}
          alt='Main product'
          className='w-full h-full object-cover rounded-2xl transition-all duration-300'
        />
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        {images.map((img, index) => (
          <div
            key={index}
            className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 aspect-square' >
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setMainImage(img)}
              className={`w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-300 ${
                img === mainImage
                  ? 'opacity-100 scale-105'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;