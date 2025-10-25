import Card from '../Card';
import localize from 'utils/localize';
import FormField from '../FormField';

const ProductList = () => {
  return <div>
    <section>
      <div className='lg:mx-10 px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <header className='text-center pb-12'>
          <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>Product Collection</h2>
        </header>
        <div className='mt-8 block lg:hidden'>
          <button
            className='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600'
          >
            <span className='text-sm font-medium'> Фільтри та сортування </span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-4 rtl:rotate-180'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
          </button>
        </div>

        <div className='mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8'>
          <div className='hidden space-y-4 lg:block'>
            <div>
              <label htmlFor='SortBy' className='block text-xs font-medium text-gray-700'> Sort By </label>

              <select id='SortBy' className='mt-1  border-gray-300 text-sm border-b'>
                <option >Сортування за</option>
                <option value='Title, DESC'>Title, DESC</option>
                <option value='Title, ASC'>Title, ASC</option>
                <option value='Price, DESC'>Price, DESC</option>
                <option value='Price, ASC'>Price, ASC</option>
              </select>
            </div>

            <div>
              <p className='block text-xs font-medium text-gray-700'>Filters</p>

              <div className='mt-1 space-y-2'>
                <details
                  className='overflow-hidden border border-gray-300 [&_summary::-webkit-details-marker]:hidden'
                >
                  <summary
                    className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'
                  >
                    <span className='text-sm font-medium'> Наявність </span>

                    <span className='transition group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className='border-t border-gray-200 bg-white'>
                    <header className='flex items-center justify-between p-4'>
                      <span className='text-sm text-gray-700'> 0 Обрано</span>

                      <button type='button' className='text-sm text-gray-900 underline underline-offset-4'>
                        Зкинути
                      </button>
                    </header>

                    <ul className='space-y-1 border-t border-gray-200 p-4'>
                      <li>
                        <label htmlFor='FilterInStock' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterInStock'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> In Stock (5+) </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor='FilterPreOrder' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterPreOrder'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Передзамовлення (3+) </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor='FilterOutOfStock' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterOutOfStock'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Out of Stock (10+) </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>

                <details
                  className='overflow-hidden border border-gray-300 [&_summary::-webkit-details-marker]:hidden'
                >
                  <summary
                    className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'
                  >
                    <span className='text-sm font-medium'> Ціна </span>

                    <span className='transition group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='size-4'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className='border-t border-gray-200 bg-white'>
                    <header className='flex items-center justify-between p-4'>
                      <span className='text-sm text-gray-700'> Навища ціна $600 </span>

                      <button type='button' className='text-sm text-gray-900 underline underline-offset-4'>
                        Reset
                      </button>
                    </header>

                    <div className='border-t border-gray-200 p-4'>
                      <div className='flex justify-between gap-4'>
                        <label htmlFor='FilterPriceFrom' className='flex items-center gap-2'>
                          <span className='text-sm text-gray-600'>грн</span>

                          <input
                            type='number'
                            id='FilterPriceFrom'
                            placeholder='Від'
                            className='w-full rounded-md border-gray-200 shadow-xs sm:text-sm'
                          />
                        </label>

                        <label htmlFor='FilterPriceTo' className='flex items-center gap-2'>
                          <span className='text-sm text-gray-600'>грн</span>

                          <input
                            type='number'
                            id='FilterPriceTo'
                            placeholder='До '
                            className='w-full rounded-md border-gray-200 shadow-xs sm:text-sm'
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </details>
                <details
                  className='overflow-hidden border border-gray-300 [&_summary::-webkit-details-marker]:hidden'
                >
                  <FormField/>

                  <div className='border-t border-gray-200 bg-white'>
                    <header className='flex items-center justify-between p-4'>
                      <span className='text-sm text-gray-700'> 0 Обрано </span>

                      <button type='button' className='text-sm text-gray-900 underline underline-offset-4'>
                        Reset
                      </button>
                    </header>

                    <ul className='space-y-1 border-t border-gray-200 p-4'>
                      <li>
                        <label htmlFor='FilterRed' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterRed'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Червоний </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor='FilterBlue' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterBlue'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Синій </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor='FilterGreen' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterGreen'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Зелений </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor='FilterOrange' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterOrange'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Помаранчевий </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor='FilterPurple' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterPurple'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Фіолетовий </span>
                        </label>
                      </li>

                      <li>
                        <label htmlFor='FilterTeal' className='inline-flex items-center gap-2'>
                          <input
                            type='checkbox'
                            id='FilterTeal'
                            className='size-5 rounded-sm border-gray-300 shadow-sm'
                          />

                          <span className='text-sm font-medium text-gray-700'> Голубий </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 px-4 lg:mx-5'>
              {localize.temporaryCards.map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  rating={item.rating}
                  className='w-70 h-120'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;
};
export default ProductList;