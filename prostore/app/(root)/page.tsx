// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getFeaturedProducts } from "@/lib/action/product.action";

// const HomePage = async () => {
//   await delay(5000);
//   return <>Prostore</>;
// };

const HomePage = async () => {
  const featuredProducts = await getFeaturedProducts();
  return (
    <div>
      {featuredProducts?.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={sampleData.products} title="New Arrivals" limit={4} />
    </div>
  );
};

export default HomePage;
