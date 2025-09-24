import Card from 'components/Card';
import localize from 'utils/localize';

export default function PopularCard() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-20 justify-items-center gap-y-10 my-10'>
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