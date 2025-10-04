
export default function Rating({ rating }: { rating: number }) {
  return (
    <div className='flex items-center space-x-2'>
      <div className='flex text-yellow-400'>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className='text-sm'>
              {i < rating ? '★' : '☆'}
            </span>
          ))}
      </div>
      <span className='text-gray-700 font-medium text-sm'></span>
    </div>
  );
}