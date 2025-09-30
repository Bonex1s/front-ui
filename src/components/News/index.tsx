import localize from 'utils/localize';

const News =() => {
  return (
    <> 
      <div>
        <div className='text-3xl font-bold text-center mt-20 mb-10'>
          <span>Новини та статті</span>
        </div>
        <div className='grid grid-cols-3 gap-6 mx-auto my-20 w-[80%]'>
          {localize.newsBlock.map((item, id) => (<div key={id} className='text-sm'> <img src={item.url} alt={item.alt} />{item.title}</div> ))}
        </div>
      </div>
    </>);};
export default News;