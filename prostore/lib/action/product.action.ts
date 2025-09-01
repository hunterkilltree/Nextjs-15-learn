"use server";
import sampleData from "@/db/sample-data";

export async function getProductBySlug(slug: string) {
  return sampleData.products.find((product) => product.slug === slug);
}

// Get all categories
export async function getAllCategories() {
  const products = sampleData.products;
  return [...new Set(products.map((product) => product.category))].map(
    (category) => ({
      category: category,
      _count: products.filter((product) => product.category === category)
        .length,
    })
  );
}
