import React from 'react';

interface CartProps {
  product: {
    title: string;
    price: string;
    imageUrl?: string | string[];
  }[];
}  

const Cart: React.FC<CartProps> = ({ product }) => {
  return (
    <div
      className='relative w-screen max-w-sm px-4 py-8 sm:px-6 lg:px-8'
      aria-modal='true'
      role='dialog'
      tabIndex={-1}
    >
      <div className='mt-4 space-y-6'>
        <div className='space-y-4'>
          {product.map((item, index) => (
            <div key={index} className='flex items-center gap-4'>
              <img
                src={
                  Array.isArray(item.imageUrl)
                    ? item.imageUrl[0]
                    : item.imageUrl || 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg'
                }
                alt={item.title}
                className='size-16 rounded-sm object-cover'
              />

              <div>
                <h3 className='text-sm text-gray-900'>{item.title}</h3>

                <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>
                  <div>
                    <dt className='inline'>Ціна:</dt>
                    <dd className='inline'>{item.price}</dd>
                  </div>

                  <div>
                    <dt className='inline'>Color:</dt>
                    <dd className='inline'>White</dd>
                  </div>
                </dl>
              </div>
            </div>  
          ))}
        </div>

        <div className='space-y-4 text-center'>
          <a
            href='#'
            className='block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400'
          >
            View my cart ({product.length})
          </a>

          <a
            href='#'
            className='block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'
          >
            Checkout
          </a>

          <a
            href='#'
            className='inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600'
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;