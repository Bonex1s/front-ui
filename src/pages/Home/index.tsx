import Header from 'components/Header';
import Hero from 'components/Hero';
import Popular from 'components/Popular';
import Brends from 'components/Brends';

export default function Home() {
  return (
    <main>
      <section>
        <div className='w-full'>
          <div  className='text-2xl font-bold'>
            <Header />
            <Hero />
            <Popular/>
            <Brends/>
          </div>
        </div>
      </section>
      
    </main>
  );
}
