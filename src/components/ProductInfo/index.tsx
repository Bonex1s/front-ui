import Breadcrumb from '../Breadcrumb';

const ProductInfo = () => {
  return <>     
    <div>
      <Breadcrumb />  
      <div className='flex justify-center min-h-screen p-10 w-11/12 mx-auto'>
        <div>
          <div className='flex h-120 mb-4'>
            <img src='https://thegadget.ua/images/products/2396a0cb59e3f16f27f7c7e7d91df9f2b323ce5e3732e73dce86cc9b08f54d85.webp' alt='' />
          </div>
          <div className='flex w-20 h-20'>
            <img src='https://thegadget.ua/images/products/5858950487af96ae772dcf655c0e899031ec5cb01db4c8be66b69210af1dada9.webp' alt='' />
            <img src='https://thegadget.ua/images/products/5858950487af96ae772dcf655c0e899031ec5cb01db4c8be66b69210af1dada9.webp' alt='' />
            <img src='https://thegadget.ua/images/products/5858950487af96ae772dcf655c0e899031ec5cb01db4c8be66b69210af1dada9.webp' alt='' />
            <img src='https://thegadget.ua/images/products/5858950487af96ae772dcf655c0e899031ec5cb01db4c8be66b69210af1dada9.webp' alt='' />
          </div>
            
        </div>
        <div className='flex flex-col ml-10 gap-4 w-1/2'>
          <h1 className='font-bold text-xl'>Шкіряний чохол Leather Case (AAA) with stand для Samsung Galaxy Z Fold7 (Black)</h1>
          <p className='text-black/50'>Код товару: 2000000128740</p>
          <ul className='grid grid-cols-2 gap-10'  >
            <li>✔ Якісна та дорога шкіра</li>
            <li>✔ Якісна та дорога шкіра</li>
            <li>✔ Якісна та дорога шкіра</li>
            <li>✔ Якісна та дорога шкіра</li>
          </ul>

          <h2>₴799.00</h2>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </>;
};

export default ProductInfo;