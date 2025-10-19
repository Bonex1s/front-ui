import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductList from '@/components/ProductList';

const ProductCollection = () =>  {
  return <div>
    <Header/>,
    <Breadcrumb/>
    <ProductList/>
    <Footer/>
  </div>;
};

export default ProductCollection;