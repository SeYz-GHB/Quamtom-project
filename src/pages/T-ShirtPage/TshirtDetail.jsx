import { useState } from 'react';
import { data } from '../../data/TshirtsData';
import CardsRow1 from '../../components/HomepageComponent/CardRow1/CardsRow1';
import PaymentPopup from '../../components/PaymentComponent';
import ProductDetail from '../../components/ProductDetail';

const TshirtDetail = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Renamed from 'cap' for clarity
  const [count, setCount] = useState(1);

  const handleBuyClick = (product, quantity) => {
    setSelectedProduct(product); // Set the selected product
    setCount(quantity);          // Set the quantity
    setIsPaymentOpen(true);      // Open the payment popup
  };

  return (
    <div>
      <ProductDetail 
        data={data} 
        productType="tshirt" 
        onBuyClick={handleBuyClick} 
      />
      <PaymentPopup
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        product={selectedProduct}
        quantity={count}
      />
      <div className="hidden lg:inline-block md:max-w-4xl p-6">
      <CardsRow1 data={data} basePath='tshirts' />
      </div>
    </div>
  );
};

export default TshirtDetail;