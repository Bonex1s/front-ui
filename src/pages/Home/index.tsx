import Header from 'components/Header';
import Hero from 'components/Hero';
import Popular from 'components/Popular';
import Brends from 'components/Brends';
import CategoryMenu from '@/components/CategoryMenu';
import NewsBlock from '@/components/NewsBlock';
import  Description  from '@/components/Description';
import ReviewsSlider from '@/components/ReviewsSlider';
import Footer from 'components/Footer';

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
            <CategoryMenu/>
            <NewsBlock/>
            <Description/>
            <ReviewsSlider/> 
            <Footer/> 
          </div>
        </div>
      </section>
      
    </main>
  );
}
