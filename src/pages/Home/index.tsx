import Header from 'components/Header';
import Hero from 'components/Hero';
import Popular from 'components/Popular';
import PopularCard from 'components/PopularCard';

export default function Home() {
  return (
    <main>
      <section>
        <div className='w-full'>
          <div  className='text-2xl font-bold'>
            <Header />
            <Hero />
            <Popular/>
            <PopularCard/>
          </div>
        </div>
      </section>
      
    </main>
  );
}
