import Card from 'components/Card';
import localize from 'utils/localize';

export default function PopularCard() {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 px-4 md:px-10 lg:mx-20 my-10'>
      {localize.temporaryCards.map(item => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          rating={item.rating}
        />
      ))}
    </div>
  );
}