import Header from 'components/Header';
import Hero from 'components/Hero';
import Popular from 'components/Popular';
import Brends from 'components/Brends';
import CategotyMenu from '@/components/CategoryMenu';
import NewsBlock from '@/components/News';

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
            <CategotyMenu/>
            <NewsBlock/>
          </div>
        </div>
      </section>
      
    </main>
  );
}
