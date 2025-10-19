const Hero = () => {
  return (
    <section className='relative w-full h-[80vh]'>
      <img
        src='https://cdn-stamplib.casetify.com/cms/image/1ed580a3fcdfb5574a25c600fff782ff.jpg'
        alt='hero'
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black/40' />
      <div className='relative max-w-lg pl-16 py-16 text-white'>
        <h1 className='text-2xl font-bold sm:text-4xl'>
          Understand user flow and
          <strong className='text-beigeCustom'> increase </strong>
          conversions
        </h1>

        <p className='mt-4 text-base sm:text-lg text-gray-200'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
          accusamus impedit minima harum corporis iusto.
        </p>

        <div className='mt-4 flex gap-4 sm:mt-6'>
          <a
            className='inline-block border border-beigeCustom bg-beigeCustom px-5 py-3 font-medium text-lg text-black shadow-sm transition-colors hover:bg-black hover:text-white hover:border-black'
            href='#'
          >
            Get Started
          </a>

          <a
            className='inline-block border border-white/70 px-5 py-3 font-medium text-lg text-white shadow-sm transition-colors hover:bg-white/20 hover:text-white'
            href='#'
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;