// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

// const HomePage = async () => {
//   await delay(5000);
//   return <>Prostore</>;
// };

const HomePage = () => {
  return (
    <div>
      <ProductList data={sampleData.products} title="New Arrivals" limit={4} />
    </div>
  );
};

export default HomePage;
