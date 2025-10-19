const FormField = () => {
  return (
    <summary
      className='flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition'
    >
      <span className='text-sm font-medium'> Colors </span>

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
  )
  ;
};

export default FormField;