import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main>
      <section>
        <div className='w-full'>
          <div  className='text-2xl font-bold'>
            <Header/>
            <Footer/>
          </div>
        </div>
      </section>
      
    </main>
  );
}
